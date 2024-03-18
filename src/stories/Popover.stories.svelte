<script lang="ts" context="module">
	import { Popover } from '$lib/index.js'

	export const meta = {
		title: 'Components/Popover',
		components: Popover
	}
</script>

<script lang="ts">
	import { RoundedOutlinedButton } from '$lib/index.js'
	import { Story } from '@storybook/addon-svelte-csf'
</script>

<Story name="Default">
	<Popover placement="bottom-start">
		<RoundedOutlinedButton slot="button" let:buttonRef use={[buttonRef]}>
			Click me!
		</RoundedOutlinedButton>
		Content
	</Popover>
</Story>
