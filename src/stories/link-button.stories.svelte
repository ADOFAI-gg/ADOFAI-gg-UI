<script lang="ts" module>
	import { LinkButton } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Link Button',
		component: LinkButton,
		tags: ['autodocs'],
		args: { href: 'https://adofai.gg' }
	});
</script>

<Story name="Primary / Small" args={{ variant: 'primary', size: 'sm' }}>Button</Story>
<Story name="Primary / Medium" args={{ variant: 'primary', size: 'md' }}>Button</Story>
<Story name="Primary / Large" args={{ variant: 'primary', size: 'lg' }}>Button</Story>

<Story name="Danger / Small" args={{ variant: 'danger', size: 'sm' }}>Button</Story>
<Story name="Danger / Medium" args={{ variant: 'danger', size: 'md' }}>Button</Story>
<Story name="Danger / Large" args={{ variant: 'danger', size: 'lg' }}>Button</Story>

<Story name="Ghost Light / Small" args={{ variant: 'ghostLight', size: 'sm' }}>Button</Story>
<Story name="Ghost Light / Medium" args={{ variant: 'ghostLight', size: 'md' }}>Button</Story>
<Story name="Ghost Light / Large" args={{ variant: 'ghostLight', size: 'lg' }}>Button</Story>

<Story name="Ghost Dark / Small" args={{ variant: 'ghostDark', size: 'sm' }}>Button</Story>
<Story name="Ghost Dark / Medium" args={{ variant: 'ghostDark', size: 'md' }}>Button</Story>
<Story name="Ghost Dark / Large" args={{ variant: 'ghostDark', size: 'lg' }}>Button</Story>

<Story name="Outlined / Small" args={{ variant: 'outlined', size: 'sm' }}>Button</Story>
<Story name="Outlined / Medium" args={{ variant: 'outlined', size: 'md' }}>Button</Story>
<Story name="Outlined / Large" args={{ variant: 'outlined', size: 'lg' }}>Button</Story>
