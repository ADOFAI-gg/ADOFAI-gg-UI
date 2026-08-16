export const MenuContext = Symbol('menu context');
export const MenuRadioContext = Symbol('menu radio context');

export type MenuContextData = typeof import('bits-ui').DropdownMenu;
export type MenuRadioContextData = Pick<MenuContextData, 'RadioItem'>;
