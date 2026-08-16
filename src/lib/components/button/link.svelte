<script lang="ts" module>
	export type LinkButtonProps = BaseButtonProps &
		WithElementRef<HTMLAnchorAttributes, HTMLAnchorElement>;
</script>

<script lang="ts">
	import { type WithElementRef } from 'bits-ui';
	import Icon from '../legacy-atoms/icon.svelte';
	import { button, buttonIconOnly, type BaseButtonProps } from './props.js';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/index.js';

	let {
		ref = $bindable(null),
		class: className,
		transparent,
		size,
		variant,
		children,
		leftIcon,
		rightIcon,
		iconOnly,
		link: _link,
		meltElement: _meltElement,
		use: _use,
		...restProps
	}: LinkButtonProps = $props();

	void _link;
	void _meltElement;
	void _use;
</script>

<a
	bind:this={ref}
	class={cn(
		button({ size, variant }),
		iconOnly && buttonIconOnly(size),
		transparent && 'text-white/60',
		className
	)}
	{...restProps}
>
	{#if leftIcon}<Icon alt="icon" icon={leftIcon} size={24} />{/if}
	{@render children?.()}
	{#if rightIcon}<Icon alt="icon" icon={rightIcon} size={24} />{/if}
</a>
