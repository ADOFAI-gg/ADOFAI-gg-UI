<script lang="ts" context="module">
	import { NavAccessibilitySettings, NavLanguageSelector } from '$lib/index.js'

	export const meta = {
		title: 'Components/Nav/Popup/Nav Accessibility Settings',
		component: NavAccessibilitySettings
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<NavAccessibilitySettings {...args} />
</Template>

<Story name="Default" args={{}} />
