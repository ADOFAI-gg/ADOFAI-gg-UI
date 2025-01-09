import type { createDialog } from '@melt-ui/svelte'

export const ModalContext = Symbol('modal context')
export type ModalContextData = ReturnType<typeof createDialog>
