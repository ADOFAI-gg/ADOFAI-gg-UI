<script lang="ts" module>
	import { SearchOptionsBar, type FilterScheme } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Search/Search Options Bar'
	});
</script>

<script lang="ts">
	let filters = $state([
		{
			id: crypto.randomUUID(),
			key: 'name',
			value: 'Hi'
		}
	]);

	let sort = $state('sort1');

	const filterScheme = {
		filter: {
			name: {
				type: 'text',
				default: 'Hello',
				name: 'Name',
				icon: 'gg:music',
				options: {
					label: 'YAHOOOOOOO',
					placeholder: 'Placeholder'
				}
			}
		},
		sort: [
			{
				id: 'sort1',
				name: 'Sort 1'
			},
			{
				id: 'sort2',
				name: 'Sort 2'
			},
			{
				id: 'sort3',
				name: 'Sort 3'
			}
		]
	} as FilterScheme;
</script>

<Story name="Default">
	<SearchOptionsBar {filterScheme} bind:filters bind:sort />
</Story>

<div class="mt-4">
	<div>Sort: {sort}</div>
	<pre><code>{JSON.stringify(filters, null, 2)}</code></pre>
</div>
