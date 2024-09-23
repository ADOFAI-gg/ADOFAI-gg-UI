<script lang="ts" context="module">
	import PanelTitle from '$lib/components/PanelTitle.svelte'
	import { Panel } from '$lib/index'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Panel',
		component: Panel
	})
</script>

<Story name="Default">
	<Panel>
		<PanelTitle>Title</PanelTitle>

		Hello</Panel
	>
</Story>
