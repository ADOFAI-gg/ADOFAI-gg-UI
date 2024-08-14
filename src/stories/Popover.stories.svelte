<script lang="ts" context="module">
	import { Popover, Button, PopoverContentPanel } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		title: 'Components/Popover',
		component: Popover
	})
</script>

<Story name="Default">
	<Popover open let:close placement="bottom-start">
		<svelte:fragment slot="button" let:trigger>
			<Button variant="outlined" meltElement={trigger}>Click me!</Button>
		</svelte:fragment>

		<PopoverContentPanel>
			Content

			<Button size="sm" on:click={close}>close</Button>
		</PopoverContentPanel>
	</Popover>
</Story>
