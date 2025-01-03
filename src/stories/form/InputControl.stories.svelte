<script lang="ts" context="module">
	import { InputControl } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		component: InputControl,
		title: 'Components/Form/Controls/Input Control'
	})
</script>

{#snippet template(args: any)}
	<InputControl {...args} />
{/snippet}

<Story name="Default" args={{}} children={template} />

<Story
	name="With Placeholder"
	args={{ placeholder: 'custom:Wow Placeholder' }}
	children={template}
/>
