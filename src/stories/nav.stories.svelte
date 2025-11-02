<script lang="ts" module>
	import { Nav } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Nav'
	});
</script>

<Story name="Default">
	<Nav.Root
		links={[
			{
				title: 'Levels',
				href: '/levels'
			},
			{
				title: 'References',
				href: '/references'
			}
		]}
	></Nav.Root>
</Story>
