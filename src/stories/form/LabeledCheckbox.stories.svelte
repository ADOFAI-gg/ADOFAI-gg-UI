<script lang="ts" context="module">
	import { LabeledCheckbox } from '$lib/index.js'
	import { Story, Template } from '@storybook/addon-svelte-csf'
	import type { Meta } from '@storybook/svelte'

	export const meta: Meta = {
		component: LabeledCheckbox,
		title: 'Components/Form/Controls/Labeled Checkbox'
	}
</script>

<Template let:args>
	<LabeledCheckbox label="custom:wow this is label" {...args} />
</Template>

<Story name="Default" args={{}} />

<Story name="Checked" args={{ checked: true }} />
