<script lang="ts" context="module">
	import { NavPopupLink } from '$lib/index.js'

	export const meta = {
		title: 'Components/Nav/Popup/Nav Popup Link',
		component: NavPopupLink
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<NavPopupLink href="/" {...args}>Link</NavPopupLink>
</Template>

<Story name="Default" args={{}} />
