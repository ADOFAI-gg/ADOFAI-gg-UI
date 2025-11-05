<script lang="ts" module>
	import { Nav } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ganjangFactory from './assets/ganjangfactory.png';

	const { Story } = defineMeta({
		title: 'Components/Nav'
	});
</script>

<Story name="Default">
	<Nav.Root
		signInUrl="/"
		signUpUrl="/"
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

<Story name="With User">
	<Nav.Root
		signInUrl="/"
		signUpUrl="/"
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
		user={{
			name: 'GanjangFactory',
			avatar: ganjangFactory
		}}
	></Nav.Root>
</Story>
