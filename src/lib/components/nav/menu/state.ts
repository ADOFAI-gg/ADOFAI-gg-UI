import type { Previous } from 'runed'
import { getContext } from 'svelte'
import type { Writable } from 'svelte/store'

export const NavMenuContextKey = Symbol('Nav Menu')
export const NavMenuGroupKey = Symbol('Nav Menu Group')

export const getNavMenuContext = () => getContext<NavMenuContext>(NavMenuContextKey)
export const getNavMenuGroupContext = () => getContext<NavMenuGroupData>(NavMenuGroupKey)

export type NavMenuContext = {
	items: Writable<Record<string, NavMenuGroupData>>
	groupStack: Writable<string[]>
	height: Writable<number>
	prevGroup: Previous<string[]>
}

export type NavMenuItemData = { el: HTMLElement; target?: string }

export type NavMenuGroupData = {
	items: Writable<NavMenuItemData[]>
	highlighted: Writable<number>
}
