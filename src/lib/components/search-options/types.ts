import type { Snippet } from 'svelte';

export type FilterItem = {
	id: string;
	key: string;
	value: unknown;
};

export type FilterControlProp<T = unknown> = {
	value: T;
	setValue: (newValue: unknown) => void;
};

export type FilterTypeDefinition<T = unknown> = {
	value?: Snippet<[T]>;
	extra?: Snippet<[T]>;
	popover: Snippet<[FilterControlProp<T>]>;
};

export type FilterDefinition<T = unknown> = {
	name: string;
	type: string;
	icon?: string;
	default: T;
	params?: unknown;
};

export type FilterScheme = Record<string, FilterDefinition>;
