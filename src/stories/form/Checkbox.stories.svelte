<script lang="ts" context="module">
	import { Checkbox } from '$lib/index.js'
	import { Story, Template } from '@storybook/addon-svelte-csf'
	import type { Meta } from '@storybook/svelte'

	export const meta: Meta = {
		component: Checkbox,
		title: 'Components/Form/Controls/Checkbox'
	}
</script>

<Template let:args>
	<Checkbox {...args} />
</Template>

<Story name="Default" args={{}} />

<Story name="Checked" args={{ checked: true }} />
