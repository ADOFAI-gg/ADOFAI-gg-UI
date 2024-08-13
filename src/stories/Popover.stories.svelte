<script lang="ts" context="module">
	import { Popover } from '$lib/index.js'

	export const meta = {
		title: 'Components/Popover',
		components: Popover
	}
</script>

<script lang="ts">
	import { Button, PopoverContentPanel } from '$lib/index.js'
	import { Story } from '@storybook/addon-svelte-csf'
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
