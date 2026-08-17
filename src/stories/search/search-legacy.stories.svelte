<script lang="ts" module>
	import {
		AddFilterButton,
		Button,
		FilterEditPanel,
		LegacySearchOptionsBar,
		SearchBar,
		SearchOptionChip,
		type LegacySearchOptionsBarProps
	} from '$lib/index.js';
	import PopoverSelect from '$lib/components/search/PopoverSelect.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Search/Compatibility',
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let searchValue = $state('');
	let selected = $state('');
	let editValue = $state('initial value');
	let legacyData = $state({
		filter: [{ id: 'name-filter', key: 'name', value: 'Ada' }],
		sort: 'recent',
		pageSize: 20
	});

	const legacyScheme = {
		pageSize: [20, 50, 100],
		defaultPageSize: 20,
		sort: [
			{ name: 'Recent', objective: 'recent' },
			{ name: 'Popular', objective: 'popular' }
		],
		filter: {
			name: {
				type: 'string',
				label: 'Name',
				icon: 'user',
				name: 'Name',
				default: ''
			}
		}
	} satisfies LegacySearchOptionsBarProps['scheme'];
</script>

<Story name="Search Bar and Chips">
	<div class="gap-4 w-96 grid">
		<SearchBar bind:value={searchValue} placeholder="lib-search-add-filter" aria-label="Search" />
		<div class="gap-2 flex flex-wrap items-center">
			<SearchOptionChip icon="music" objectiveKey="lib-search-sort" hasValue
				>Featured</SearchOptionChip
			>
			<SearchOptionChip icon="filter" objectiveKey="lib-search-add-filter" />
			<AddFilterButton onclick={() => {}} />
		</div>
	</div>
</Story>

<Story name="Popover Select">
	<PopoverSelect
		items={[
			{
				title: 'Difficulty',
				options: [
					{ value: 'easy', label: 'Easy', icon: 'smile' },
					{ value: 'hard', label: 'Hard', subtitle: 'For experienced players' }
				]
			}
		]}
		bind:value={selected}
		onSelect={() => {}}
	>
		{#snippet trigger({ props })}
			<Button {...props}>Select difficulty: {selected || 'none'}</Button>
		{/snippet}
	</PopoverSelect>
</Story>

<Story name="Filter Edit Panel">
	<FilterEditPanel
		scheme={{ type: 'string', label: 'Name' }}
		value={editValue}
		close={() => {}}
		onRemove={() => {}}
		onSave={(value) => (editValue = String(value))}
	/>
</Story>

<Story name="Legacy Options Bar">
	<LegacySearchOptionsBar scheme={legacyScheme} bind:data={legacyData} />
	<pre class="mt-4 text-xs text-white/60">{JSON.stringify(legacyData, null, 2)}</pre>
</Story>
