<script lang="ts" context="module">
	import { PopoverSelect, Button } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Popover Select',
		component: PopoverSelect
	})

	const items = new Array(10).fill(0).map((x, i) => ({
		title: `야호 ${i}`,
		options: new Array(10).fill(0).map((y, j) => ({
			label: `Item ${i * 10 + j}`,
			value: `${i}-${j}`
		}))
	}))
</script>

<Story name="Default">
	<PopoverSelect {items}>
		{#snippet trigger(trigger)}
			<Button size="sm" meltElement={trigger}>Click me!</Button>
		{/snippet}
	</PopoverSelect>
</Story>
