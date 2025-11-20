<script lang="ts" module>
	export type SearchOptionsBarProps = {
		filters: FilterItem[];
		filterScheme?: FilterScheme;
		extraTypes?: Record<string, FilterTypeDefinition>;
	};
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Item from './item.svelte';
	import type { FilterItem, FilterScheme, FilterTypeDefinition } from './types.js';
	import { filterTypes } from './filter-types/index.js';

	let { filterScheme, filters = $bindable([]), extraTypes = {} }: SearchOptionsBarProps = $props();

	const types = $derived({ ...filterTypes, ...extraTypes });
</script>

<div class="gap-2 flex flex-wrap">
	{#if filterScheme}
		{#each filters as filter, i (i)}
			{@const def = filterScheme[filter.key]}
			{@const type = types[def.type]}
			{@const value = filter.value}

			{#snippet valueWrapper()}
				{@render type.value?.(value)}
			{/snippet}

			<Item icon={def.icon} value={type.value ? valueWrapper : undefined}>
				{#snippet name()}
					{def.name}
				{/snippet}
			</Item>
		{/each}

		{#if filters.length > 0}
			<Item
				variant="danger"
				icon="gg:refresh"
				onclick={() => {
					filters = [];
				}}
			>
				{#snippet name()}
					<Localized id="lib-search-reset-filter" />
				{/snippet}
			</Item>
		{/if}
	{/if}
	<Item variant="ghost" icon="gg:add">
		{#snippet name()}
			<Localized id="lib-search-add-filter" />
		{/snippet}
	</Item>
</div>
