<script lang="ts">
	import { getContext, type Snippet } from 'svelte'
	import {
		MenuContext,
		MenuRadioContext,
		type MenuContextData,
		type MenuRadioContextData
	} from './symbols'
	import { melt } from '@melt-ui/svelte'

	interface Props {
		value: string
		children?: Snippet
		variant?: 'default' | 'danger'
	}

	const { children, value, variant = 'default' }: Props = $props()

	const {
		elements: { radioItem },
		helpers: { isChecked }
	} = getContext<MenuRadioContextData>(MenuRadioContext)
</script>

<div class="menu-item menu-{variant}" use:melt={$radioItem({ value })}>
	<div class="radio-button-area">
		{#if $isChecked(value)}
			<div class="radio-icon"></div>
		{/if}
	</div>
	{@render children?.()}
</div>

<style lang="scss">
	.radio-button-area {
		width: 16px;
		height: 16px;
		position: relative;
	}

	.menu-item {
		gap: 8px;
	}

	.radio-icon {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		background-color: white;
		width: 8px;
		height: 8px;
		border-radius: 4px;
	}
</style>
