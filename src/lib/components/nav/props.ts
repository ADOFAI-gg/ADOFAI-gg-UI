import type { CommandItemProps } from 'bits-ui';
import type { Snippet } from 'svelte';
import type { VariantProps } from 'tailwind-variants';
import type { menuItem } from './variants.js';

export type NavLinkItem = {
	title: string;
	href: string;
};

export type LinkProps = {
	href: string;
	children?: Snippet;
};

export type RootProps = {
	links?: NavLinkItem[];
	logo?: Snippet<[{ content: Snippet }]>;
};

export type MenuItemProps = {
	variant?: VariantProps<typeof menuItem>['variant'];
	icon?: string;
} & CommandItemProps;
