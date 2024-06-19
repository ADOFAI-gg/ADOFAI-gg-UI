<script lang="ts" context="module">
	import { NavSignArea } from '$lib/index.js'

	export const meta = {
		title: 'Components/Nav/Nav Sign Area',
		component: NavSignArea
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<NavSignArea {...args} />
</Template>

<Story name="Default" />
