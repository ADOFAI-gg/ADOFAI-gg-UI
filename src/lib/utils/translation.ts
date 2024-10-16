/* eslint-disable @typescript-eslint/ban-types */

import { writable, type Readable, derived } from 'svelte/store'

import langs from '../localization/langs.json'
import Cookies from 'js-cookie'

import { FluentBundle, FluentResource, type FluentVariable } from '@fluent/bundle'
import { translationData } from '$lib/localization/translations/index.js'

export const availableLanguages: LangResponse[] = langs

export const fallbackLang = 'ko'

const registeredLangSections: string[] = []

const langSections = ['ui-common', 'ui-footer', 'ui-search'] as const

export type LangSection = (typeof langSections)[number] | ADOFAIGG_UI.ExtraLangSections[number]
export type LangData = Record<string, FluentBundle>
export type StringTranslationKey =
	| `${LangSection}:`
	| (`${LangSection}:${string & {}}` & {})
	| (`${string}:${string}` & {})

export type ArrayTranslationKey = [LangSection, string]
export type TranslationKey = StringTranslationKey | ArrayTranslationKey

export const langData: Record<string, LangData> = {}

export const registerTranslations = (data: Record<string, string>, sections: string[]) => {
	const sourceResources = Object.fromEntries(
		sections.map((x) => [x, new FluentResource(data[`en/${x}`])])
	)
	const buildLangBundle = (lang: string): LangData => {
		const result: LangData = {} as LangData

		for (const section of sections) {
			const bundle = new FluentBundle(lang)
			setupFunctions(bundle)

			bundle.addResource(sourceResources[section])
			const rawData = data[`${lang}/${section}`]
			const errors = bundle.addResource(new FluentResource(rawData), { allowOverrides: true })
			for (const error of errors) {
				console.warn('Fluent resource load error:', error)
			}
			result[section] = bundle
		}

		return result
	}

	for (const lang of langs) {
		const existingData = langData[lang.code] ?? {}
		langData[lang.code] = Object.assign(existingData, buildLangBundle(lang.code))
	}

	registeredLangSections.push(...sections)
}
const setupFunctions = (bundle: FluentBundle) => {
	bundle._functions.FORUM_LINK = (text) => `[forumLink]${text}[/forumLink]`
}

// export const langData: Record<string, LangData> = Object.fromEntries(
// 	langs.map((lang) => [lang.code, buildLangBundle(lang.code)])
// )

export const getLangCode = (code: string) => {
	const lang = availableLanguages.find((x) => x.code === code || x.aliases.includes(code))
	return lang?.code || 'ko'
}

export const currentLang = writable<string>(
	getLangCode(
		typeof window !== 'undefined'
			? Cookies.get('_adofaigg-lang') || window.navigator.language
			: 'en'
	)
)

type LangResponse = {
	code: string
	name: string
	aliases: string[]
}

const escapeHtmlTags = (str: string) =>
	str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;')

export const translateKey = (
	language: string,
	rawKey: TranslationKey,
	args: Record<string, FluentVariable>,
	escape = true
) => {
	let key: string
	let sectionName: LangSection

	if (typeof rawKey === 'string') {
		;[sectionName, key] = rawKey.split(':') as ArrayTranslationKey
	} else {
		;[sectionName, key] = rawKey
	}

	if (!language) return key
	const lang = langData[language]
	if (!lang) return key
	const section = lang[sectionName]
	if (!section) return key
	let message = section.getMessage(key)
	if (!message?.value) message = langData[fallbackLang][sectionName].getMessage(key)
	if (!message?.value) return key
	const result = section.formatPattern(message.value, args)
	if (escape) escapeHtmlTags(result)
	return result
}

export const translate = (
	language: Readable<string>,
	rawKey: TranslationKey,
	args: Record<string, FluentVariable>,
	escape = true
) => {
	return derived(language, (l) => {
		return translateKey(l, rawKey, args, escape)
	})
}

registerTranslations(translationData, [...langSections] as string[])
