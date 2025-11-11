import { getContext, setContext } from 'svelte'
import type { Readable } from 'svelte/store'
import type { TranslationKey } from '$lib/utils/translation.js'

export const globalContextName = 'adofaigg-ui-global-context'

export type GlobalContext = {
	language: Readable<string>
	setLanguage: (lang: string) => void

	urls: {
		main: string
	}

	links: {
		key: TranslationKey
		href: string
	}[]

	callbacks: {
		signIn: () => void
		signUp: () => void
	}
}

export const setGlobalContext = (context: GlobalContext) => setContext(globalContextName, context)
export const getGlobalContext = () => getContext<GlobalContext>(globalContextName)
