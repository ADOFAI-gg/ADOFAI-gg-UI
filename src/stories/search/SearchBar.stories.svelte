<script lang="ts" module>
	import SearchBar from '$lib/components/search/SearchBar.svelte'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Search/Search Bar'
	})
</script>

<Story name="Example">
	<SearchBar placeholder="custom:Wow this is placeholder" />
</Story>
