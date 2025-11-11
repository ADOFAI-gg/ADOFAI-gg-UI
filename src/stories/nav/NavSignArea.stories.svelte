<script lang="ts" context="module">
	import { NavSignArea } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Nav/Nav Sign Area',
		component: NavSignArea
	})
</script>

{#snippet template(args: any)}
	<NavSignArea {...args} />
{/snippet}

<Story name="Default" />
