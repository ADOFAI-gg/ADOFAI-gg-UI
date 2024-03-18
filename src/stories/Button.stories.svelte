<script lang="ts" context="module">
	import { RoundedOutlinedButton } from '$lib/index.js'

	export const meta = {
		title: 'Components/Button'
	}
</script>

<script lang="ts">
	import { TextButton } from '$lib/index.js'
	import { Story } from '@storybook/addon-svelte-csf'
</script>

<Story name="Rounded Outlined">
	<RoundedOutlinedButton>Button</RoundedOutlinedButton>
</Story>

<Story name="Text">
	<TextButton>Button</TextButton>
</Story>
