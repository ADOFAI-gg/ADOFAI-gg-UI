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
			key: 'name',
			value: 'Hi'
		}
	]);

	const filterScheme = {
		name: {
			type: 'text',
			default: 'Hello',
			name: 'Name',
			icon: 'gg:music'
		}
	} as FilterScheme;
</script>

<Story name="Default">
	<SearchOptionsBar {filterScheme} {filters} />
</Story>
