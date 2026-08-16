export const MenuContext = Symbol('menu context');
export const MenuRadioContext = Symbol('menu radio context');

import type { DropdownMenu } from 'bits-ui';

export type MenuContextData = typeof DropdownMenu & {
	readonly closeOnItemClick: boolean;
};
export type MenuRadioContextData = Pick<MenuContextData, 'RadioItem' | 'closeOnItemClick'>;
