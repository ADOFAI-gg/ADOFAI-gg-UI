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
				label: '이것은 인풋필드 이다 !',
				name: '제목',
				default: ''
			},
			something: {
				type: 'string',
				icon: 'tile',
				label: '와!',
				name: '무언가',
				default: ''
			},
			intRange: {
				type: 'range',
				icon: 'music',
				min: 0,
				max: 100,
				minLabel: '최소',
				maxLabel: '최대',
				default: [0, 100],
				name: '대충정수범위'
			},
			select: {
				type: 'select',
				icon: 'tile',
				name: '와샌즈',
				default: [],
				label: '샌즈',
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
				],
				multiple: true
			},
			select2: {
				type: 'rangeSelect',
				icon: 'tile',
				name: '범위 셀렉트',
				default: ['item1', 'item3'],
				minLabel: '최소',
				maxLabel: '최대',
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
		sort: [
			{
				name: '최신순',
				objective: 'recent-asc'
			},
			{
				name: '과거순',
				objective: 'recent-desc'
			}
		],
		pageSize: [15, 30, 50, 100, 200],
		defaultPageSize: 50
	} satisfies SearchOptionScheme
</script>

<script lang="ts">
	let data = $state<SearchOptionsData>({
		filter: [],
		sort: 'recent-asc',
		pageSize: 50
	})
</script>

<Story name="Example">
	<SearchOptionsBar {scheme} bind:data />

	<pre>{JSON.stringify(data, null, 2)}</pre>
</Story>
