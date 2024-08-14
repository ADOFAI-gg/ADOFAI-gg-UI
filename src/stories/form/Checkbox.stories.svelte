<script lang="ts" context="module">
	import { Checkbox } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		component: Checkbox,
		title: 'Components/Form/Controls/Checkbox'
	})
</script>

{#snippet template(args: any)}
	<div class="checkboxes">
		<Checkbox {...args} size="sm" />
		<Checkbox {...args} size="md" />
		<Checkbox {...args} size="lg" />
	</div>
{/snippet}

<Story name="Default" args={{}} children={template} />

<Story name="Checked" args={{ checked: true }} children={template} />

<style lang="scss">
	.checkboxes {
		display: flex;
		gap: 12px;
	}
</style>
