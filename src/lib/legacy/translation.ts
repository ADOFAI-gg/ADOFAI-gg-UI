import { FluentBundle, FluentResource, type FluentVariable } from '@fluent/bundle';
import { derived, writable, type Readable } from 'svelte/store';
import { availableLanguages } from '../l10n/index.svelte.js';

export type StringTranslationKey = string;
export type ArrayTranslationKey = readonly [string, string];
export type TranslationKey = StringTranslationKey;
type AnyTranslationKey = TranslationKey | ArrayTranslationKey;

type SectionData = Record<string, FluentBundle>;

export const langData: Record<string, SectionData> = {};
export const currentLang = writable('en');

const escapeHtml = (value: string) =>
	value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');

const getKey = (rawKey: AnyTranslationKey): [string, string] =>
	typeof rawKey === 'string' ? (rawKey.split(':', 2) as [string, string]) : [...rawKey];

const getLanguageCode = (language: string) =>
	availableLanguages.find((x) => x.code === language || x.aliases.includes(language))?.code ?? 'en';

const setupFunctions = (bundle: FluentBundle) => {
	bundle._functions.FORUM_LINK = (text) => `[forumLink]${text}[/forumLink]`;
};

export const registerTranslations = (data: Record<string, string>, sections: string[]) => {
	for (const language of availableLanguages) {
		const sectionData: SectionData = {};
		for (const section of sections) {
			const bundle = new FluentBundle(language.code);
			setupFunctions(bundle);

			const source = data[`en/${section}`];
			if (source) bundle.addResource(new FluentResource(source));

			const localized = data[`${language.code}/${section}`];
			if (localized && language.code !== 'en') {
				bundle.addResource(new FluentResource(localized), { allowOverrides: true });
			}

			sectionData[section] = bundle;
		}
		langData[language.code] = sectionData;
	}
};

export const getTranslationData = (language: string, rawKey: AnyTranslationKey) => {
	const [section, key] = getKey(rawKey);
	const bundle = langData[getLanguageCode(language)]?.[section];
	const message = bundle?.getMessage(key);
	return message ? [message, bundle] as const : null;
};

export const translateKey = (
	language: string,
	rawKey: AnyTranslationKey,
	args: Record<string, FluentVariable> = {},
	escape = true,
	attribute?: string
) => {
	const [section, key] = getKey(rawKey);
	const fallback = `${section}:${key}`;
	const translation = getTranslationData(language, rawKey);
	if (!translation) return escape ? escapeHtml(fallback) : fallback;

	const [message, bundle] = translation;
	const pattern = attribute ? message.attributes[attribute] ?? message.value : message.value;
	if (!pattern) return escape ? escapeHtml(fallback) : fallback;

	const result = bundle.formatPattern(pattern, args);
	return escape ? escapeHtml(result) : result;
};

export const translate = (
	language: Readable<string>,
	rawKey: AnyTranslationKey,
	args: Record<string, FluentVariable> = {},
	escape = true,
	attribute?: string
) => derived(language, (value) => translateKey(value, rawKey, args, escape, attribute));
