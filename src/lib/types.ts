/**
 * Compatibility type entrypoint retained for consumers that imported the
 * master branch's `$lib/types` module directly.
 */
export type { User, UserListGroup, UserListItemModel } from './components/user-list/types.js';
export type { SelectGroup, SelectOption } from './utils/types.js';
export type { ButtonSize, ButtonVariant } from './components/button/props.js';
export type { CheckboxSize } from './components/form/checkbox.svelte';

export type ButtonStyle =
	| 'primary'
	| 'danger'
	| 'ghost-light'
	| 'ghost-dark'
	| 'ghost-danger'
	| 'ghost-primary'
	| 'outlined'
	| 'outlined-danger';

export type FloatingPlacement =
	| 'top'
	| 'top-start'
	| 'top-end'
	| 'bottom'
	| 'bottom-start'
	| 'bottom-end'
	| 'left'
	| 'left-start'
	| 'left-end'
	| 'right'
	| 'right-start'
	| 'right-end';
