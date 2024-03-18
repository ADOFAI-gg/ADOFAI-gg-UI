<script lang="ts" context="module">
	import { Footer } from '$lib/index.js'
	import { Story, Template } from '@storybook/addon-svelte-csf'

	export const meta = {
		component: Footer,
		title: 'Components/Footer'
	}
</script>

<Template let:args>
	<Footer {...args} />
</Template>

<Story name="Default" args={{}} />

<Story name="Minimal" args={{ minimal: true }} />
