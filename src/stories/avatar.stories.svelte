<script lang="ts" module>
	import { Avatar } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ganjangfactory from './assets/ganjangfactory.png';

	const { Story } = defineMeta({
		title: 'Components/Avatar',
		component: Avatar,
		tags: ['autodocs']
	});
</script>

<Story name="Default" />
<Story
	name="With Image"
	args={{
		src: ganjangfactory,
		alt: 'GanjangFactory',
		delayMs: 300
	}}
/>
