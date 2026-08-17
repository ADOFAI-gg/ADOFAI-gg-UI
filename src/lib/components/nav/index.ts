import LegacyNav from './Nav.svelte';
import Root from './root.svelte';
import Link from './link.svelte';
import NavLink from './NavLink.svelte';
import NavSignArea from './NavSignArea.svelte';
import NavUserArea from './NavUserArea.svelte';
import MenuItem from './menu/menu-item.svelte';

export { Root, Link, NavLink, NavSignArea, NavUserArea, MenuItem };
/** Supports both the master monolithic component and beta compound usage. */
export const Nav = Object.assign(LegacyNav, {
	Root,
	Link,
	NavLink,
	NavSignArea,
	NavUserArea,
	MenuItem
});
export * from './props.js';
export type { NavUserAreaProps } from './NavUserArea.svelte';
export { default as NavMenu } from './menu/NavMenu.svelte';
export { default as NavMenuDivider } from './menu/NavMenuDivider.svelte';
export { default as NavMenuGroup } from './menu/NavMenuGroup.svelte';
export { default as NavMenuGroupHeader } from './menu/NavMenuGroupHeader.svelte';
export { default as NavMenuItem } from './menu/NavMenuItem.svelte';
export { default as NavLanguageSwitcher } from './menu/NavLanguageSwitcher.svelte';
export * from './menu/state.js';
