<script lang="ts" context="module">
	import { RoundedOutlineButton } from '$lib/index.js'

	export const meta = {
		title: 'Atoms/Button'
	}
</script>

<script lang="ts">
	import { TextButton } from '$lib/index.js'
	import { Story } from '@storybook/addon-svelte-csf'
</script>

<Story name="Rounded Outline">
	<RoundedOutlineButton>Button</RoundedOutlineButton>
</Story>

<Story name="Text">
	<TextButton>Button</TextButton>
</Story>
