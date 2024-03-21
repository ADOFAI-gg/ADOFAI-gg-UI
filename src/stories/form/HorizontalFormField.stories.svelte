<script lang="ts" context="module">
	import { HorizontalFormField, InputControl } from '$lib/index.js'
	import { Story, Template } from '@storybook/addon-svelte-csf'
	import type { Meta } from '@storybook/svelte'

	export const meta: Meta = {
		component: HorizontalFormField,
		title: 'Components/Form/Horizontal Form Field'
	}
</script>

<Template let:args>
	<HorizontalFormField {...args}>
		<InputControl placeholder="custom:Wow sans" />
	</HorizontalFormField>
</Template>

<Story name="Default" args={{}} />

<Story name="Labeled" args={{ label: 'custom:Label' }} />

<Story name="Required" args={{ label: 'custom:Label', required: true }} />

<Story name="With Error" args={{ label: 'custom:Label', error: 'custom:Wow this is error' }} />
