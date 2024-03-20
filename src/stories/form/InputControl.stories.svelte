<script lang="ts" context="module">
	import { InputControl } from '$lib/index.js'
	import { Story, Template } from '@storybook/addon-svelte-csf'
	import type { Meta } from '@storybook/svelte'

	export const meta: Meta = {
		component: InputControl,
		title: 'Components/Form/Controls/Input Control'
	}
</script>

<Template let:args>
	<InputControl {...args} />
</Template>

<Story name="Default" args={{}} />

<Story name="With Placeholder" args={{ placeholder: 'custom:Wow Placeholder' }} />
