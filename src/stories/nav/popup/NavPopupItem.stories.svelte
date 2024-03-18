<script lang="ts" context="module">
	import { NavPopupItem } from '$lib/index.js'

	export const meta = {
		title: 'Components/Nav/Popup/Nav Popup Item',
		component: NavPopupItem
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<NavPopupItem {...args}>Item</NavPopupItem>
</Template>

<Story name="Default" args={{}} />
<Story name="Selected" args={{ selected: true }} />
