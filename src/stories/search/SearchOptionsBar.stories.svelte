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
			},
			intRange: {
				type: 'range',
				icon: 'music',
				min: 0,
				max: 100,
				minLabel: 'custom:최소',
				maxLabel: 'custom:최대',
				default: [0, 100],
				name: 'custom:대충정수범위'
			},
			select: {
				type: 'select',
				icon: 'tile',
				name: 'custom:와샌즈',
				default: 'NONE',
				label: 'custom:샌즈',
				options: [
					{
						value: 'NONE',
						label: '없음'
					},
					{
						value: 'SANS',
						label: '샌즈'
					},
					{
						value: 'HYONSU',
						label: '정현수'
					}
				]
			},
			select2: {
				type: 'rangeSelect',
				icon: 'tile',
				name: 'custom:범위 셀렉트',
				default: ['item1', 'item3'],
				minLabel: 'custom:최소',
				maxLabel: 'custom:최대',
				options: [
					{
						value: 'item1',
						label: '아이템 1'
					},
					{
						value: 'item2',
						label: '아이템 2'
					},
					{
						value: 'item3',
						label: '아이템 3'
					}
				]
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
