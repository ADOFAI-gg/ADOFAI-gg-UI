import type { FloatingConfig } from '@melt-ui/svelte/internal/actions'

export interface User {
	id: string
	username: string
	displayName: string | null
	avatarURL: string | null
	isAdmin: boolean
}

export type ButtonStyle = 'primary' | 'danger' | 'ghost-light' | 'ghost-dark' | 'outlined'
export type ButtonSize = 'lg' | 'md' | 'sm'

export type CheckboxSize = 'lg' | 'md' | 'sm'

export type FloatingPlacement = Exclude<FloatingConfig, null>['placement']
