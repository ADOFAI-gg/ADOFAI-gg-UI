<script lang="ts" context="module">
	import { Popover } from '$lib/index.js'

	export const meta = {
		title: 'Components/Popover',
		components: Popover
	}
</script>

<script lang="ts">
	import { Button } from '$lib/index.js'
	import { Story } from '@storybook/addon-svelte-csf'
</script>

<Story name="Default">
	<Popover placement="bottom-start">
		<Button variant="outlined" slot="button" let:buttonRef use={[buttonRef]}>Click me!</Button>
		Content
	</Popover>
</Story>
