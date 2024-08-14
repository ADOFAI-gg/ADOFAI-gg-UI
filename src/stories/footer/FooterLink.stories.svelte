<script lang="ts" context="module">
	import FooterLink from '$lib/components/footer/FooterLink.svelte'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		component: FooterLink,
		title: 'Components/Footer/Footer Link'
	})
</script>

{#snippet template(args: any)}
	<FooterLink href="/" {...args}>Link</FooterLink>
{/snippet}

<Story name="Default" args={{}} children={template} />
