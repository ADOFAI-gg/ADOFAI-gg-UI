<script lang="ts" context="module">
	import { PopoverSelect, Button } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Popover Select',
		component: PopoverSelect
	})

	const items = new Array(100).fill(0).map((x, i) => ({
		label: `Item ${i}`,
		value: i
	}))
</script>

<Story name="Default">
	<PopoverSelect {items}>
		{#snippet trigger(trigger)}
			<Button size="sm" meltElement={trigger}>Click me!</Button>
		{/snippet}
	</PopoverSelect>
</Story>
