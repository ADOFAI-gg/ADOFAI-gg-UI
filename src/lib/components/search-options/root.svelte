<script lang="ts" module>
	export type SearchOptionsBarProps = {
		filterScheme: FilterScheme;
		extraTypes?: Record<string, FilterTypeDefinition>;
		filters?: FilterItem[];
		sort?: string;
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
	import { runViewTransition } from '$lib/utils/transition.svelte.js';
	import AddButton from './add-button.svelte';
	import SortButton from './sort-button.svelte';

	let {
		filterScheme,
		sort = $bindable(''),
		filters = $bindable([]),
		extraTypes = {}
	}: SearchOptionsBarProps = $props();

	const types = $derived({ ...filterTypes, ...extraTypes });
	let containerRef = $state<HTMLElement | null>(null);

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

	const addFilter = (key: string) => {
		const filterDef = filterScheme.filter[key];

		setTimeout(() => {
			const toAdd = {
				id: crypto.randomUUID(),
				key,
				value: filterDef.default
			};

			runViewTransition(() => {
				filters = [...filters, toAdd];
			});

			setTimeout(() => {
				const el = containerRef?.querySelector(
					`button[data-filter-id="${toAdd.id}"]`
				) as HTMLButtonElement;
				el?.click();
			}, 100);
		}, 100);
	};

	const resetFilters = () => {
		runViewTransition(() => {
			filters = [];
		});
	};
</script>

<div class="gap-2 flex flex-wrap items-center" bind:this={containerRef}>
	{#if filterScheme.sort && filterScheme.sort.length > 0}
		<SortButton scheme={filterScheme} bind:sort />
		<div class="h-4.5 border-white/20 border-l"></div>
	{/if}

	{#each displayItems as item (item.id)}
		<div style="view-transition-name: chip-{item.id}">
			{#if item.type === 'filter'}
				{@const filter = item.filter}
				{@const def = filterScheme.filter[filter.key]}
				{@const type = types[def.type]}
				{@const value = filter.value}

				<ValueItem
					id={filter.id}
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
				<AddButton {filterScheme} {filters} typeDefs={types} onAdd={addFilter} />
			{/if}
		</div>
	{/each}
</div>
