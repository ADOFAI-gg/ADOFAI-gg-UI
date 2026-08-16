import type { UserProp } from '$lib/utils/types.js';
import type { Snippet } from 'svelte';

/** Translation keys accepted by the legacy master navigation API. */
export type NavTranslationKey = string | readonly [string, string];

/** User shape used by the master navigation components. */
export type NavUser = {
	displayName: string;
	avatarURL: string | null;
	isAdmin: boolean;
};

export type NavUserLike = NavUser | UserProp;

export type NavContextLink = {
	href: string;
	key: NavTranslationKey;
};

export type NavLinkItemLike = NavLinkItem | NavContextLink;

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

export type NavProps = {
	user: NavUserLike | null;
	minimal?: boolean;
	appendLogo?: Snippet;
	leftSlot?: Snippet;
	rightSlot?: Snippet;
	menu?: Snippet;
	fullWidth?: boolean;

	/** Optional beta-compatible override for contexts without master links. */
	links?: NavLinkItemLike[];
	onSignIn?: () => void;
	onSignUp?: () => void;
	onSignOut?: () => void;
};

export type NavSignAreaProps = {
	onSignIn?: () => void;
	onSignUp?: () => void;
};

export type NavLinkProps = {
	href: string;
	key: NavTranslationKey;
	children?: Snippet;
};
