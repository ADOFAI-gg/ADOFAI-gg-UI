import type { Snippet } from 'svelte';

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
	menuPopupExtra?: Snippet;
};
