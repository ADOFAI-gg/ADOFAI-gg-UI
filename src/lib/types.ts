import type { FloatingConfig } from '@melt-ui/svelte/internal/actions'
import type { TranslationKey } from '$lib/index'
import type { Snippet } from 'svelte'

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
	displayName: string
	avatarURL: string | null
	isAdmin: boolean
}

export type ButtonStyle =
	| 'primary'
	| 'danger'
	| 'ghost-light'
	| 'ghost-dark'
	| 'ghost-danger'
	| 'outlined'
export type ButtonSize = 'lg' | 'md' | 'sm'

export type CheckboxSize = 'lg' | 'md' | 'sm'

export type FloatingPlacement = Exclude<FloatingConfig, null>['placement']

export type SearchFilterScheme = (
	| {
			type: 'string'
			label: TranslationKey
	  }
	| {
			type: 'select'
	  }
) & {
	icon: string
	name: TranslationKey
	default: unknown
}

export interface SearchSortScheme {
	name: TranslationKey
	icon?: Snippet

	objective: string
	direction: 'asc' | 'desc'
}

export type SearchOptionScheme = {
	sort: SearchSortScheme[]
	filter: Record<string, SearchFilterScheme>
} & (
	| {
			pageSize: number[]
			defaultPageSize: number
	  }
	| {
			pageSize?: false
	  }
)

export interface SearchFilter {
	id: string
	key: string
	value: unknown
}

export interface SearchSort {
	objective: string
	order: 'asc' | 'desc'
}

export interface SearchOptionsData {
	filter: SearchFilter[]
	sort: SearchSort[]
	pageSize?: number
}
