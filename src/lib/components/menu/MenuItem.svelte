<script lang="ts">
	import { getContext, type Snippet } from 'svelte'
	import { MenuContext, type MenuContextData } from './symbols'
	import { melt } from '@melt-ui/svelte'

	interface Props {
		onclick?: () => void
		icon?: Snippet
		children?: Snippet
		noIcon?: boolean
		variant?: 'default' | 'danger'
	}

	const { onclick, icon, children, noIcon = false, variant = 'default' }: Props = $props()

	const {
		elements: { item }
	} = getContext<MenuContextData>(MenuContext)
</script>

<!-- svelte-ignore event_directive_deprecated -->
<div use:melt={$item} on:m-click={() => onclick?.()} class="menu-item menu-{variant}">
	{#if !noIcon}
		<div class="icon">
			{@render icon?.()}
		</div>
	{/if}

	{@render children?.()}
</div>

<style lang="scss">
	.icon {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}
</style>
