<script lang="ts" module>
	import type { UserListGroup } from './types.js';

	export type UserListGroupProps = {
		group: UserListGroup;
		depth: number;
		initiallyOpen?: boolean;
	};
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Collapsible } from 'bits-ui';
	import UserTree from './tree.svelte';

	let { group, depth, initiallyOpen = false }: UserListGroupProps = $props();
	let open = $state(initiallyOpen);

	const margin = $derived(`${depth * 24}px`);
</script>

<Collapsible.Root bind:open>
	<Collapsible.Trigger
		class="group gap-1 flex cursor-pointer items-center text-left select-none"
		style={`margin-left: ${margin}`}
		aria-label={`${open ? 'Collapse' : 'Expand'} ${group.name}`}
	>
		<div class="size-5 flex items-center justify-center">
			<Icon
				icon="gg:chevron-down"
				class="size-4.5 opacity-60 transition group-hover:opacity-100 group-data-[state='open']:rotate-180"
				aria-hidden="true"
			/>
		</div>
		<span>{group.name}</span>
	</Collapsible.Trigger>

	<Collapsible.Content
		hiddenUntilFound
		class="gap-2 data-[state=open]:animate-collapsible-in data-[state=closed]:animate-collapsible-out flex flex-col overflow-hidden"
	>
		<UserTree items={group.data} depth={depth + 1} />
	</Collapsible.Content>
</Collapsible.Root>
