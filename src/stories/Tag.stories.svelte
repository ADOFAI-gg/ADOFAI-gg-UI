<script lang="ts" context="module">
	import { Tag } from '$lib/index'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		title: 'Components/Tag',
		component: Tag
	})
</script>

<Story name="Default">
	<div class="tag-container">
		<Tag color="yellow">legendary</Tag>
		<Tag color="blue">recommended</Tag>
		<Tag color="white">unlisted</Tag>
		<Tag color="gray">hidden</Tag>
	</div>
</Story>

<style lang="scss">
	.tag-container {
		display: flex;
		gap: 10px;
	}
</style>
