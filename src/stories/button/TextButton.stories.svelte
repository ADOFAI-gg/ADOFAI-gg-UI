<script lang="ts" context="module">
	import { TextButton } from '$lib/index.js'

	export const meta = {
		title: 'Components/Button/Text Button',
		component: TextButton
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<TextButton {...args}>Button</TextButton>
</Template>

<Story name="Default" args={{}} />

<Story name="Link" args={{ href: 'https://adofai.gg' }} />
