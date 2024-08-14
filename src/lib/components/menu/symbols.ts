import type { createDropdownMenu } from '@melt-ui/svelte'

export const MenuContext = Symbol('menu context')

export type MenuContextData = ReturnType<typeof createDropdownMenu>
