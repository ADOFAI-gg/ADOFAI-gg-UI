<script lang="ts" context="module">
	import { Popover, Button, PopoverContentPanel } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		title: 'Components/Popover',
		component: Popover
	})
</script>

<Story name="Default">
	<Popover open placement="bottom-start">
		{#snippet trigger(el)}
			<Button variant="outlined" meltElement={el}>Click me!</Button>
		{/snippet}

		{#snippet children({ close })}
			<PopoverContentPanel>
				Content

				<Button size="sm" on:click={close}>close</Button>
			</PopoverContentPanel>
		{/snippet}
	</Popover>
</Story>
