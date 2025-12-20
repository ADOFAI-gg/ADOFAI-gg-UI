<script lang="ts" module>
	export type SearchOptionsBarProps = {
		filters: FilterItem[];
		filterScheme?: FilterScheme;
		extraTypes?: Record<string, FilterTypeDefinition>;
	};

	type FilterDisplayItem = {
		id: string;
	} & (
		| {
				type: 'filter';
				filter: FilterItem;
		  }
		| {
				type: 'reset';
		  }
		| {
				type: 'add';
		  }
	);
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Item from './item.svelte';
	import type { FilterItem, FilterScheme, FilterTypeDefinition } from './types.js';
	import { filterTypes } from './filter-types/index.js';
	import ValueItem from './value-item.svelte';
	import { flip } from 'svelte/animate';
	import { fade, fly } from 'svelte/transition';
	import { flushSync } from 'svelte';
	import { runViewTransition } from '$lib/utils/transition.svelte.js';

	let { filterScheme, filters = $bindable([]), extraTypes = {} }: SearchOptionsBarProps = $props();

	const types = $derived({ ...filterTypes, ...extraTypes });

	const displayItems = $derived.by<FilterDisplayItem[]>(() => {
		const result = filters.map(
			(x) => ({ type: 'filter', filter: x, id: x.id }) as FilterDisplayItem
		);

		if (filters.length > 0) result.push({ id: 'reset', type: 'reset' });
		result.push({ id: 'add', type: 'add' });

		return result;
	});

	const deleteFilter = (id: string) => {
		runViewTransition(() => {
			filters = filters.filter((x) => x.id !== id);
		});
	};

	const resetFilters = () => {
		runViewTransition(() => {
			filters = [];
		});
	};
</script>

<div class="gap-2 flex flex-wrap">
	{#if filterScheme}
		{#each displayItems as item (item.id)}
			<div style="view-transition-name: chip-{item.id}">
				{#if item.type === 'filter'}
					{@const filter = item.filter}
					{@const def = filterScheme[filter.key]}
					{@const type = types[def.type]}
					{@const value = filter.value}

					<ValueItem
						onChange={(newValue) => {
							const newFilters = [...filters];
							const currentIdx = newFilters.indexOf(filter);
							if (currentIdx < 0) return;
							const currentFilter = newFilters[currentIdx];

							newFilters[currentIdx] = {
								...currentFilter,
								value: newValue
							};

							filters = newFilters;
						}}
						onDelete={() => {
							deleteFilter(filter.id);
						}}
						definition={def}
						typeDefinition={type}
						{value}
					/>
				{:else if item.type === 'reset'}
					<Item
						variant="danger"
						icon="gg:refresh"
						onclick={() => {
							resetFilters();
						}}
					>
						{#snippet name()}
							<Localized id="lib-search-reset-filter" />
						{/snippet}
					</Item>
				{:else if item.type === 'add'}
					<Item variant="ghost" icon="gg:add">
						{#snippet name()}
							<Localized id="lib-search-add-filter" />
						{/snippet}
					</Item>
				{/if}
			</div>
		{/each}
	{/if}
</div>
