import { getContext } from 'svelte';
import type { Previous } from 'runed';
import type { Writable } from 'svelte/store';

export const NavMenuContextKey = Symbol('nav menu');
export const NavMenuGroupKey = Symbol('nav menu group');

export type NavMenuItemData = {
	el: HTMLElement;
	target?: string;
};

export type NavMenuGroupData = {
	items: Writable<NavMenuItemData[]>;
	highlighted: Writable<number>;
};

export type NavMenuContext = {
	groupStack: Writable<string[]>;
	prevGroup: Previous<string[]>;
	items: Writable<Record<string, NavMenuGroupData>>;
	height: Writable<number>;
};

export const getNavMenuContext = () => getContext<NavMenuContext>(NavMenuContextKey);
export const getNavMenuGroupContext = () => getContext<NavMenuGroupData>(NavMenuGroupKey);
