import type { FloatingConfig } from '@melt-ui/svelte/internal/actions'

export type UserListItemModel =
	| {
			type: 'user'
			data: User
			href?: string
	  }
	| {
			type: 'group'
			name: string
			data: UserListItemModel[]
	  }

export interface User {
	username: string
	displayName: string | null
	avatarURL: string | null
	isAdmin: boolean
}

export type ButtonStyle = 'primary' | 'danger' | 'ghost-light' | 'ghost-dark' | 'outlined'
export type ButtonSize = 'lg' | 'md' | 'sm'

export type CheckboxSize = 'lg' | 'md' | 'sm'

export type FloatingPlacement = Exclude<FloatingConfig, null>['placement']
