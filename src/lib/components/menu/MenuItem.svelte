<script lang="ts" module>
	import { DropdownMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type MenuItemProps = Omit<
		DropdownMenu.ItemProps,
		'child' | 'children' | 'onclick' | 'onSelect'
	> & {
		onclick?: () => void;
		icon?: Snippet;
		children?: Snippet;
		noIcon?: boolean;
		variant?: 'default' | 'danger';
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import { getContext } from 'svelte';
	import { MenuContext, type MenuContextData } from './symbols.js';

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		icon,
		children,
		noIcon = false,
		variant = 'default',
		...restProps
	}: MenuItemProps = $props();

	const { closeOnItemClick } = getContext<MenuContextData>(MenuContext);
</script>

<DropdownMenu.Item
	bind:ref
	{...restProps}
	class={cn(
		'h-8 gap-4 flex min-w-[180px] cursor-pointer items-center bg-transparent transition-colors',
		variant === 'danger'
			? 'text-gg-red data-[highlighted]:bg-gg-red/20'
			: 'text-white data-[highlighted]:bg-white/20',
		className
	)}
	closeOnSelect={closeOnItemClick}
	onSelect={() => onclick?.()}
>
	{#if !noIcon}
		<div class="size-4 shrink-0">
			{@render icon?.()}
		</div>
	{/if}

	{@render children?.()}
</DropdownMenu.Item>
