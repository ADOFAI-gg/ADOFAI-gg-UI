<script lang="ts" context="module">
	import { NavSignArea } from '$lib/index.js'

	export const meta = {
		title: 'Components/Nav/Nav Sign Area',
		component: NavSignArea
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
	import { dummyUser } from '../dummyData.js'
</script>

<Template let:args>
	<NavSignArea {...args} />
</Template>

<Story
	name="Default"
	args={{
		user: null
	}}
/>

<Story
	name="Signed In"
	args={{
		user: dummyUser
	}}
/>
