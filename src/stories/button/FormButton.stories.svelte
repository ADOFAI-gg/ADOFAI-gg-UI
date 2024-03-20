<script lang="ts" context="module">
	import { FormButton } from '$lib/index.js'

	export const meta = {
		title: 'Components/Button/Form Button',
		component: FormButton
	}
</script>

<script lang="ts">
	import { TextButton } from '$lib/index.js'
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<FormButton {...args}>Button</FormButton>
</Template>

<Story name="Default" args={{}} />

<Story name="Link" args={{ href: 'https://adofai.gg' }} />
