<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte'
	import { MenuContext, type MenuContextData } from './symbols'
	import { melt } from '@melt-ui/svelte'

	export let noIcon = false
	export let variant: 'default' | 'danger' = 'default'

	const {
		elements: { item }
	} = getContext<MenuContextData>(MenuContext)

	const dispatch = createEventDispatcher()
</script>

<div use:melt={$item} on:m-click={() => dispatch('click')} class="menu-item menu-{variant}">
	{#if !noIcon}
		<div class="icon">
			<slot name="icon" />
		</div>
	{/if}

	<slot />
</div>

<style lang="scss">
	@use '../../stylesheets/system/colors' as *;

	.menu-default {
		--menu-item-color: 255, 255, 255;
		color: white;
	}

	.menu-danger {
		--menu-item-color: $red;
		color: rgba($red, 1);
	}

	.menu-item {
		height: 32px;
		padding: 0 16px;
		gap: 16px;
		min-width: 180px;

		cursor: pointer;
		display: flex;
		align-items: center;

		transition: background-color ease 0.2s;

		background-color: rgba(var(--menu-item-color), 0);

		&[data-highlighted] {
			background-color: rgba(var(--menu-item-color), 0.2);
		}
	}

	.icon {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}
</style>
