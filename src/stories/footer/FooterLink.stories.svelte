<script lang="ts" context="module">
	import FooterLink from '$lib/components/footer/FooterLink.svelte'
	import { Story, Template } from '@storybook/addon-svelte-csf'

	export const meta = {
		component: FooterLink,
		title: 'Components/Footer/Footer Link'
	}
</script>

<Template let:args>
	<FooterLink href="/" {...args}>Link</FooterLink>
</Template>

<Story name="Default" args={{}} />
