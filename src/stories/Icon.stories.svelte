<script lang="ts" context="module">
	import { Icon, iconNames } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		title: 'Components/Icon',
		component: Icon
	})
</script>

<Story name="All Icons">
	{#each iconNames as icon}
		<div class="item">
			<div class="icon">
				<Icon alt={icon} {icon} size={24} />
			</div>
			<div class="name">{icon}</div>
		</div>
	{/each}
</Story>

<style lang="scss">
	.item {
		display: flex;
		gap: 8px;
		margin-bottom: 8px;
	}
</style>
