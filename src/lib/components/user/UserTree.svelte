<script lang="ts">
	import type { UserListItemModel } from '$lib/types'
	import { melt, type TreeView } from '@melt-ui/svelte'
	import { getContext } from 'svelte'
	import Self from './UserTree.svelte'
	import { Avatar, Icon } from '$lib/index'

	const {
		elements: { item, group },
		helpers: { isExpanded }
	} = getContext<TreeView>('usertree')

	interface Props {
		items: UserListItemModel[]
		depth: number
	}

	const { depth, items }: Props = $props()
</script>

{#each items as x, i}
	{@const itemId = `${depth}-${i}`}
	{@const hasChildren = x.type === 'group'}

	{#if x.type === 'user'}
		{@const user = x.data}
		{#snippet template()}
			<div
				class="user-list-item"
				style="--depth: {depth};"
				use:melt={$item({
					id: itemId,
					hasChildren
				})}
			>
				<Avatar size={20} src={user.avatarURL} />
				<div class="username">{user.displayName || user.username}</div>
				{#if user.isAdmin}
					<div class="admin-sign">
						<Icon icon="wrench" alt="admin" size={18} />
					</div>
				{/if}
			</div>
		{/snippet}
		{#if x.href}
			<a href={x.href}>{@render template()}</a>
		{:else}
			{@render template()}
		{/if}
	{:else if x.type === 'group'}
		<button
			class="user-collapse"
			style="--depth: {depth};"
			use:melt={$item({
				id: itemId,
				hasChildren
			})}
		>
			<div class="more-icon" class:open={$isExpanded(itemId)}>
				<Icon size={18} icon="showMore" alt={$isExpanded(itemId) ? 'collapse' : 'expand'} />
			</div>
			<div>{x.name}</div>
		</button>
		<div class="group" use:melt={$group({ id: itemId })}>
			<Self items={x.data} depth={depth + 1} />
		</div>
	{/if}
{/each}

<style lang="scss">
	@import '../../stylesheets/system/colors';

	.user-list-item {
		display: flex;
		margin-left: calc(var(--depth) * 24px);
		align-items: center;
		gap: 4px;
	}

	.username {
		font-weight: 400;
		font-size: 16px;
		line-height: 140%;
	}

	.admin-sign {
		color: $blue;
	}

	.user-collapse {
		display: flex;
		margin-left: calc(var(--depth) * 24px);
		gap: 4px;

		&:hover .more-icon {
			opacity: 1;
		}
	}

	.more-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		transition:
			opacity ease 0.2s,
			transform ease 0.4s;

		opacity: 0.4;
		transform: rotate(0deg);

		&.open {
			transform: rotate(180deg);
		}
	}

	.group {
		display: flex;
		flex-direction: column;
		gap: 8px;
		font-size: 16px;
		line-height: 140%;
	}
</style>
