<script lang="ts" module>
	import { ImageSelector } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ganjangFactory from '../assets/ganjangfactory.png';

	const { Story } = defineMeta({
		title: 'Components/Form/Image Selector',
		tags: ['autodocs']
	});
</script>

<Story name="Empty">
	<div class="w-48">
		<ImageSelector canRemove onEdit={() => {}} onDelete={() => {}} />
	</div>
</Story>

<Story name="With Image">
	<div class="w-48">
		<ImageSelector
			src={ganjangFactory}
			aspectRatio={16 / 9}
			canRemove
			onEdit={() => {}}
			onDelete={() => {}}
		/>
	</div>
</Story>

<Story name="Loading and Disabled">
	<div class="gap-4 w-96 flex">
		<ImageSelector loading />
		<ImageSelector src={ganjangFactory} disabled />
	</div>
</Story>
