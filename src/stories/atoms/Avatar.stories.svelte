<script lang="ts" context="module">
	import { Avatar } from '$lib'
	import GanjangFactory from '../assets/ganjangfactory.png'

	export const meta = {
		title: 'Atoms/Avatar',
		component: Avatar
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<Avatar {...args} />
</Template>

<Story
	name="Without Image"
	args={{
		size: 24,
		src: null
	}}
/>

<Story
	name="With Image"
	args={{
		size: 24,
		src: GanjangFactory
	}}
/>
