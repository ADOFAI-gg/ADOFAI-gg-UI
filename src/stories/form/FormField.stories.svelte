<script lang="ts" context="module">
	import { FormField, InputControl } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		component: FormField,
		title: 'Components/Form/Form Field'
	})
</script>

{#snippet template(args: any)}
	<FormField {...args}>
		<InputControl placeholder="custom:Wow sans" />
	</FormField>
{/snippet}

<Story name="Default" args={{}} children={template} />

<Story name="Labeled" args={{ label: 'custom:Label' }} children={template} />

<Story name="Required" args={{ label: 'custom:Label', required: true }} children={template} />

<Story name="With Help Text" args={{ helpText: 'custom:Wow this is help' }} children={template} />

<Story
	name="With Error"
	args={{ label: 'custom:Label', error: 'custom:Wow this is error' }}
	children={template}
/>
