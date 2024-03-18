<script lang="ts" context="module">
	import { NavLanguageSelector, NavPopup } from '$lib/index.js'

	export const meta = {
		title: 'Components/Nav/Popup/Nav Language Selector',
		component: NavLanguageSelector
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<NavLanguageSelector {...args} />
</Template>

<Story name="Default" args={{}} />
