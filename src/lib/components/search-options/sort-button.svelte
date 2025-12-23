<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Item from './item.svelte';
	import type { FilterScheme } from './types.js';
	import { PopoverSelect } from '$lib/index.js';

	type Props = {
		scheme: FilterScheme;
		sort: string;
	};

	let { scheme, sort = $bindable() }: Props = $props();

	let value = $state('');
	let open = $state(false);
</script>

<PopoverSelect.Root
	bind:value
	bind:open={
		() => open,
		(newValue) => {
			if (newValue) value = sort;
			open = newValue;
		}
	}
	hasValue
	selectedValue={sort}
	onSelect={(newValue) => {
		sort = newValue;
	}}
>
	{#snippet trigger({ props })}
		<Item icon="gg:sort" {...props}>
			{#snippet name()}
				<Localized id="lib-search-sort" />
			{/snippet}

			{#snippet value()}
				{scheme.sort?.find((x) => x.id === sort)?.name}
			{/snippet}
		</Item>
	{/snippet}

	{#each scheme.sort as sortDef (sortDef.id)}
		<PopoverSelect.Item name={sortDef.name} icon={sortDef.icon} value={sortDef.id} />
	{/each}
</PopoverSelect.Root>
