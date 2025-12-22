<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes, HTMLInputAttributes } from 'svelte/elements';

	export type InputProps = WithElementRef<HTMLAttributes<HTMLDivElement>>;
</script>

<script lang="ts">
	let { class: className, ref = $bindable(null), children, ...restProps }: InputProps = $props();
</script>

<div class={cn('gap-0.5 grid', className)} bind:this={ref} {...restProps}>
	{@render children?.()}
</div>
