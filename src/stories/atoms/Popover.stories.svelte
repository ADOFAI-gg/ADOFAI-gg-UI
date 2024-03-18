<script lang="ts" context="module">
	import { Popover } from '$lib/index.js'

	export const meta = {
		title: 'Atoms/Popover',
		components: Popover
	}
</script>

<script lang="ts">
	import { RoundedOutlineButton } from '$lib/index.js'
	import { Story } from '@storybook/addon-svelte-csf'
</script>

<Story name="Default">
	<Popover placement="bottom-start">
		<RoundedOutlineButton slot="button" let:buttonRef use={[buttonRef]}>
			Click me!
		</RoundedOutlineButton>
		Content
	</Popover>
</Story>
