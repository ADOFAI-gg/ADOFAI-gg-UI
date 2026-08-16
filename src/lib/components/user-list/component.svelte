<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { UserListItemModel } from './types.js';

	export type UserListProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		items: UserListItemModel[];
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import UserTree from './tree.svelte';

	let { items, class: className, ...restProps }: UserListProps = $props();
</script>

<div {...restProps} class={cn('gap-2 flex flex-col', className)}>
	<UserTree {items} depth={0} />
</div>
