import type { createDropdownMenu } from '@melt-ui/svelte'

export const MenuContext = Symbol('menu context')
export const MenuRadioContext = Symbol('menu radio context')

export type MenuContextData = ReturnType<typeof createDropdownMenu>
export type MenuRadioContextData = ReturnType<MenuContextData['builders']['createMenuRadioGroup']>
