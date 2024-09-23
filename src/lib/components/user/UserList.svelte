<script lang="ts">
	import type { UserListItemModel } from '$lib/types'
	import { createTreeView } from '@melt-ui/svelte'
	import { setContext } from 'svelte'
	import UserTree from './UserTree.svelte'

	interface Props {
		items: UserListItemModel[]
	}

	const { items }: Props = $props()

	const ctx = createTreeView({
		defaultExpanded: items.map((x, i) => `0-${i}`)
	})

	setContext('usertree', ctx)
</script>

<div class="user-list">
	<UserTree depth={0} {items} />
	<!-- {#each items as item}
		{@render model(item, 0)}
	{/each} -->
</div>

<!-- {@render model{users}} -->

<style lang="scss">
	.user-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
