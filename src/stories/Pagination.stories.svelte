<script lang="ts" module>
	import { Pagination } from '$lib/index'
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import { writable } from 'svelte/store'

	const { Story } = defineMeta({
		title: 'Components/Pagination'
	})
</script>

<script lang="ts">
	let page = writable(5)
</script>

<Story name="Default">
	<Pagination count={1000} perPage={10} {page} />
	<div>
		Page: {$page}
	</div>
</Story>
