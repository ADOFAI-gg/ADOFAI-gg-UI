<script lang="ts" module>
	import type { UserListItemModel } from './types.js';

	export type UserTreeProps = {
		items: UserListItemModel[];
		depth: number;
	};
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import Avatar from '../avatar/component.svelte';
	import Group from './group.svelte';

	let { items, depth }: UserTreeProps = $props();
</script>

{#each items as item (item)}
	{#if item.type === 'user'}
		{@const margin = `${depth * 24}px`}
		{#snippet userContent()}
			<div class="gap-1 flex items-center" style:margin-left={margin}>
				<Avatar
					class="size-5 shrink-0"
					src={item.data.avatarURL ?? undefined}
					alt={item.data.displayName}
				/>
				<span class="text-base leading-normal font-normal">
					{item.data.displayName}
					{#if item.data.isAdmin}
						<Icon
							icon="gg:key"
							class="ml-1 size-4 text-gg-blue inline-block align-[-0.2em]"
							aria-label="admin"
						/>
					{/if}
				</span>
			</div>
		{/snippet}

		{#if item.href}
			<!-- href is an API-provided URL and may be external or outside this app's route type. -->
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={item.href} class="text-inherit no-underline hover:underline">
				{@render userContent()}
			</a>
		{:else}
			{@render userContent()}
		{/if}
	{:else}
		<Group group={item} {depth} initiallyOpen={depth === 0} />
	{/if}
{/each}
