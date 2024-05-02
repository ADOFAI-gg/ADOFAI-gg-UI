<script lang="ts" context="module">
	import { Footer } from '$lib/index.js'
	import { Story, Template } from '@storybook/addon-svelte-csf'
	import type { Meta } from '@storybook/svelte'

	export const meta: Meta = {
		component: Footer,
		title: 'Components/Footer',
		parameters: {
			layout: 'fullscreen'
		}
	}
</script>

<Template let:args>
	<Footer {...args} />
</Template>

<Story name="Default" args={{}} />
