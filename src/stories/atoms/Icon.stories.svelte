<script lang="ts" context="module">
	import { Avatar, Icon, iconNames } from '$lib'

	export const meta = {
		title: 'Atoms/Icon',
		component: Icon
	}
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf'
</script>

<Template let:args>
	<Avatar {...args} />
</Template>

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
