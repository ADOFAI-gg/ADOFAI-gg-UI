<script lang="ts" module>
	import SearchBar from '$lib/components/search/SearchBar.svelte'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Search/Search Bar'
	})
</script>

<script lang="ts">
	let query = $state('')
</script>

<Story name="Example">
	<SearchBar bind:value={query} placeholder="custom:Wow this is placeholder" />

	<div>{query}</div>
</Story>
