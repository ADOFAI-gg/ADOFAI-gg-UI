import { getContext, setContext } from 'svelte';
import { get, writable, type Writable } from 'svelte/store';
import { availableLanguages, libLanguageNames } from '../l10n/index.svelte.js';

const SGlobalContext = Symbol();

export type GlobalContext = {
	availableLanguages: string[];
	languageNames: Record<string, string>;
	currentLanguage: string;
	language?: Writable<string>;
	links?: { href: string; key: string }[];
	setLanguage?: (language: string) => void;
	urls?: { main?: string };
	callbacks?: {
		signIn?: () => void;
		signUp?: () => void;
		signOut?: () => void;
	};
};

export type LegacyGlobalContext = {
	language: Writable<string>;
	links: { href: string; key: string }[];
	setLanguage?: (language: string) => void;
	urls?: { main?: string };
	callbacks?: GlobalContext['callbacks'];
};

type ContextWithLegacyFields = GlobalContext & {
	language: Writable<string>;
};

export const getGlobalContext = () =>
	getContext<ContextWithLegacyFields>(SGlobalContext);

export const setGlobalContext = (value: GlobalContext | LegacyGlobalContext) => {
	if ('currentLanguage' in value) {
		return setContext(SGlobalContext, {
			...value,
			language: value.language ?? writable(value.currentLanguage)
		} satisfies ContextWithLegacyFields);
	}

	return setContext(SGlobalContext, {
		...value,
		availableLanguages: availableLanguages.map(({ code }) => code),
		languageNames: libLanguageNames,
		currentLanguage: get(value.language)
	} satisfies ContextWithLegacyFields);
};
