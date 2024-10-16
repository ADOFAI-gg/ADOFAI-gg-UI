<script lang="ts" module>
	import SearchOptionsBar from '$lib/components/search/SearchOptionsBar.svelte'
	import type { SearchOptionScheme, SearchOptionsData } from '$lib/types'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Search/Search Options Bar'
	})

	const scheme = {
		filter: {
			title: {
				type: 'string',
				icon: 'music',
				label: 'custom:이것은 인풋필드 이다 !',
				name: 'custom:제목',
				default: ''
			},
			something: {
				type: 'string',
				icon: 'tile',
				label: 'custom:와!',
				name: 'custom:무언가',
				default: ''
			}
		},
		sort: [],
		pageSize: [15, 30, 50, 100, 200],
		defaultPageSize: 50
	} satisfies SearchOptionScheme
</script>

<script lang="ts">
	let data = $state<SearchOptionsData>({
		filter: [],
		sort: [],
		pageSize: 50
	})
</script>

<Story name="Example">
	<SearchOptionsBar {scheme} bind:data />

	<pre>{JSON.stringify(data, null, 2)}</pre>
</Story>
