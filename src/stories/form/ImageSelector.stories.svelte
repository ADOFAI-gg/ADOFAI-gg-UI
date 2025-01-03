<script lang="ts" context="module">
	import { ImageSelector } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ganjangFactory from '../assets/ganjangfactory.png'

	const { Story } = defineMeta({
		component: ImageSelector,
		title: 'Components/Form/Image Selector'
	})
</script>

{#snippet template(args: any)}
	<div style="width: 128px;">
		<ImageSelector {...args} />
	</div>
{/snippet}

<Story name="Default" args={{}} children={template} />

<Story name="With Image" args={{ src: ganjangFactory, canRemove: true }} children={template} />

<Story name="Loading" args={{ loading: true, src: ganjangFactory }} children={template} />

<Story name="Disabled" args={{ disabled: true, src: ganjangFactory }} children={template} />
