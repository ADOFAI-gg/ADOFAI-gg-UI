<script lang="ts" context="module">
	import { NavPopupSection } from '$lib/index.js'

	export const meta = {
		title: 'Components/Nav/Popup/Nav Popup Section',
		component: NavPopupSection
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<NavPopupSection {...args} title="wow:example">section content</NavPopupSection>
</Template>

<Story name="Default" args={{}} />

<Story name="With back button" args={{ back: true }} />
