import type { Snippet } from 'svelte';

export type TextFilterTypeOptions = {
	label: string;
	placeholder?: string;
};

export type BuiltInFilterOptionTypes = {
	text: TextFilterTypeOptions;
};

export type FilterItem = {
	id: string;
	key: string;
	value: unknown;
};

export type FilterControlProp<T = unknown, TOptions = unknown> = {
	options: TOptions;
	value: T;
	setValue: (newValue: unknown) => void;
};

export type FilterTypeDefinition<T = unknown, TOptions = unknown> = {
	value?: Snippet<[T]>;
	extra?: Snippet<[T]>;
	popover: Snippet<[FilterControlProp<T, TOptions>]>;
};

export interface FilterDefinition<T = unknown> {
	name: string;
	type: keyof BuiltInFilterOptionTypes;
	options: BuiltInFilterOptionTypes[this['type']];
	icon?: string;
	default: T;
	params?: unknown;
}

export type SortDefinition = {
	id: string;
	name: string;
	icon?: string;
};

export type FilterScheme = {
	filter: Record<string, FilterDefinition>;
	sort?: SortDefinition[];
};
