<script lang="ts" context="module">
	import { Footer } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		component: Footer,
		title: 'Components/Footer',
		parameters: {
			layout: 'fullscreen'
		}
	})
</script>

{#snippet template(args: any)}
	<Footer {...args} />
{/snippet}

<Story name="Default" args={{}} children={template} />
