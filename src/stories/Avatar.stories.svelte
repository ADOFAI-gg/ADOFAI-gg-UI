<script lang="ts" context="module">
	import { Avatar } from '$lib/index.js'
	import GanjangFactory from './assets/ganjangfactory.png'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		title: 'Components/Avatar',
		component: Avatar
	})
</script>

<script lang="ts">
</script>

{#snippet template(props: any)}
	<Avatar {...props} />
{/snippet}

<Story
	children={template}
	name="Without Image"
	args={{
		size: 24,
		src: null
	}}
/>

<Story
	children={template}
	name="With Image"
	args={{
		size: 24,
		src: GanjangFactory
	}}
/>
