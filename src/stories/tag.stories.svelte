<script lang="ts" module>
	import { Tag } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Tag',
		tags: ['autodocs']
	});
</script>

<Story name="Colors">
	<div class="gap-2 flex flex-wrap items-center">
		<Tag color="yellow">Yellow</Tag>
		<Tag color="blue">Blue</Tag>
		<Tag color="white">White</Tag>
		<Tag color="gray">Gray</Tag>
		<Tag color="darkblue">Dark blue</Tag>
	</div>
</Story>
