import { getContext, setContext } from 'svelte';

const SGlobalContext = Symbol();

export type GlobalContext = {
	availableLanguages: string[];
	languageNames: Record<string, string>;
	currentLanguage: string;
};

export const getGlobalContext = () => getContext<GlobalContext>(SGlobalContext);

export const setGlobalContext = (value: GlobalContext) => setContext(SGlobalContext, value);
