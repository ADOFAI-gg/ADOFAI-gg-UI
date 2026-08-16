<script lang="ts" module>
	import { Pagination } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Pagination',
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Pagination count={240} perPage={20} />
</Story>

<Story name="Many Pages">
	<Pagination count={2400} perPage={20} siblingCount={2} defaultPage={6} />
</Story>
