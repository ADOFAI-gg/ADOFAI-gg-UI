import type { UserProp } from '$lib/utils/types.js';
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
	user?: UserProp | null;
	menuPopupExtra?: Snippet;

	onSignIn?: () => void;
	onSignUp?: () => void;
	onSignOut?: () => void;
};
