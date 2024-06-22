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
	<div class="labeled-checkboxes">
		<LabeledCheckbox {...args} size="sm">
			<span>Label</span>
		</LabeledCheckbox>
		<LabeledCheckbox {...args} size="md">
			<span>Label</span>
		</LabeledCheckbox>
		<LabeledCheckbox {...args} size="lg">
			<span>Label</span>
		</LabeledCheckbox>
	</div>
</Template>

<Story name="Default" args={{}} />

<Story name="Checked" args={{ checked: true }} />

<style lang="scss">
	.labeled-checkboxes {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
