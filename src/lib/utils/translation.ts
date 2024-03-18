import { writable, type Readable, derived } from 'svelte/store'

import langs from '../localization/langs.json'
import { BROWSER } from 'esm-env'
import Cookies from 'js-cookie'

import { FluentBundle, FluentResource, type FluentVariable } from '@fluent/bundle'

export const availableLanguages: LangResponse[] = langs

export const fallbackLang = 'en'

const langSections = ['common', 'footer', 'nav'] as const

export type LangSection = (typeof langSections)[number]
export type LangData = Record<LangSection, FluentBundle>
// eslint-disable-next-line @typescript-eslint/ban-types
export type StringTranslationKey = `${LangSection}:` | (`${LangSection}:${string & {}}` & {})
export type ArrayTranslationKey = [LangSection, string]
export type TranslationKey = StringTranslationKey | ArrayTranslationKey

const rawFluentFiles = import.meta.glob('../localization/translations/**/*.ftl', {
	eager: true,
	as: 'raw'
})
const sourceResources = Object.fromEntries(
	langSections.map((x) => [
		x,
		new FluentResource(rawFluentFiles[`../localization/translations/en/${x}.ftl`])
	])
)

const buildLangBundle = (lang: string): LangData => {
	const result: LangData = {} as LangData

	for (const section of langSections) {
		const bundle = new FluentBundle(lang)
		setupFunctions(bundle)

		bundle.addResource(sourceResources[section])
		const rawData = rawFluentFiles[`../localization/translations/${lang}/${section}.ftl`]
		const errors = bundle.addResource(new FluentResource(rawData), { allowOverrides: true })
		for (const error of errors) {
			console.warn('Fluent resource load error:', error)
		}
		result[section] = bundle
	}

	return result
}

const setupFunctions = (bundle: FluentBundle) => {
	bundle._functions.FORUM_LINK = (text) => `[forumLink]${text}[/forumLink]`
}

export const langData: Record<string, LangData> = Object.fromEntries(
	langs.map((lang) => [lang.code, buildLangBundle(lang.code)])
)

export const getLangCode = (code: string) => {
	const lang = availableLanguages.find((x) => x.code === code || x.aliases.includes(code))
	return lang?.code || 'en'
}

export const currentLang = writable<string>(
	getLangCode(BROWSER ? Cookies.get('_adofaigg-lang') || window.navigator.language : 'en')
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

export const translate = (
	language: Readable<string>,
	rawKey: TranslationKey,
	args: Record<string, FluentVariable>,
	escape = true
) => {
	return derived(language, (l) => {
		let key: string
		let sectionName: LangSection

		if (typeof rawKey === 'string') {
			;[sectionName, key] = rawKey.split(':') as ArrayTranslationKey
		} else {
			;[sectionName, key] = rawKey
		}

		if (!l) return key
		const lang = langData[l]
		if (!lang) return key
		const section = lang[sectionName]
		if (!section) return key
		const message = section.getMessage(key)
		if (!message?.value) return key
		const result = section.formatPattern(message.value, args)
		if (escape) escapeHtmlTags(result)
		return result
	})
}

// export const translate = (
// 	rawKey: TranslationKey,
// 	args: Record<string, FluentVariable> = {},
// 	escape = true,
// 	l: string
// ) => {
// 	let key: string
// 	let sectionName: LangSection

// 	if (typeof rawKey === 'string') {
// 		;[sectionName, key] = rawKey.split(':') as ArrayTranslationKey
// 	} else {
// 		;[sectionName, key] = rawKey
// 	}

// 	if (!l) return key
// 	const lang = langData[l]
// 	if (!lang) return key
// 	const section = lang[sectionName]
// 	if (!section) return key
// 	const message = section.getMessage(key)
// 	if (!message?.value) return key
// 	const result = section.formatPattern(message.value, args)
// 	if (escape) escapeHtmlTags(result)
// 	return result
// }
