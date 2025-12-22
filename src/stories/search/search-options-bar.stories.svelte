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
		}
	} as FilterScheme;
</script>

<Story name="Default">
	<SearchOptionsBar {filterScheme} {filters} />
</Story>
