import { getContext, setContext } from 'svelte'
import type { Readable } from 'svelte/store'

export const globalContextName = 'adofaigg-ui-global-context'

export type GlobalContext = {
	language: Readable<string>
	setLanguage: (lang: string) => void
}

export const setGlobalContext = (context: GlobalContext) => setContext(globalContextName, context)
export const getGlobalContext = () => getContext<GlobalContext>(globalContextName)
