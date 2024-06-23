<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte'
	import { ImageSelector } from '$lib/index.js'
	import ganjangFactory from '../assets/ganjangfactory.png'

	export const meta: Meta = {
		component: ImageSelector,
		title: 'Components/Form/Image Selector'
	}
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<div style="width: 128px;">
		<ImageSelector {...args} />
	</div>
</Template>

<Story name="Default" args={{}} />

<Story name="With Image" args={{ src: ganjangFactory }} />
