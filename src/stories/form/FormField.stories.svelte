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
		<InputControl placeholder="Wow sans" />
	</FormField>
{/snippet}

<Story name="Default" args={{}} children={template} />

<Story
	name="With Subtitle"
	args={{ label: 'wow sans', subtitle: 'wow subtitle' }}
	children={template}
/>

<Story name="Labeled" args={{ label: 'Label' }} children={template} />

<Story name="Required" args={{ label: 'Label', required: true }} children={template} />

<Story name="With Help Text" args={{ helpText: 'Wow this is help' }} children={template} />

<Story
	name="With Error"
	args={{ label: 'Label', error: 'Wow this is error' }}
	children={template}
/>
