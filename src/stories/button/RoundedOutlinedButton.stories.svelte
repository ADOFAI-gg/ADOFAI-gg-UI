<script lang="ts" context="module">
	import { RoundedOutlinedButton } from '$lib/index.js'

	export const meta = {
		title: 'Components/Button/Rounded Outlined',
		component: RoundedOutlinedButton
	}
</script>

<script lang="ts">
	import { TextButton } from '$lib/index.js'
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<RoundedOutlinedButton {...args}>Button</RoundedOutlinedButton>
</Template>

<Story name="Default" args={{}} />

<Story name="Link" args={{ href: 'https://adofai.gg' }} />
