<script lang="ts" context="module">
	import { LabeledCheckbox } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import type { Meta } from '@storybook/svelte'

	const { Story } = defineMeta({
		component: LabeledCheckbox,
		title: 'Components/Form/Controls/Labeled Checkbox'
	})
</script>

{#snippet template(args: any)}
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
{/snippet}

<Story name="Default" args={{}} children={template} />

<Story name="Checked" args={{ checked: true }} children={template} />

<Story name="Required" args={{ required: true }} children={template} />

<style lang="scss">
	.labeled-checkboxes {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
