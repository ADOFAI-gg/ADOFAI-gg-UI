<script lang="ts" module>
	export type LinkButtonProps = BaseButtonProps &
		WithElementRef<HTMLAnchorAttributes, HTMLAnchorElement>;
</script>

<script lang="ts">
	import { type WithElementRef } from 'bits-ui';
	import { button, type BaseButtonProps } from './props.js';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { cn } from '$lib/index.js';

	let {
		ref = $bindable(null),
		class: className,
		transparent,
		size,
		variant,
		children,
		...restProps
	}: LinkButtonProps = $props();
</script>

<a
	bind:this={ref}
	class={cn(button({ size, variant }), transparent && 'text-white/60', className)}
	{...restProps}
>
	{@render children?.()}
</a>
