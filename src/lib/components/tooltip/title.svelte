<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type TooltipTitleProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	let { children, class: className, ...restProps }: TooltipTitleProps = $props();
</script>

<div
	{...restProps}
	class={cn('tooltip-title text-sm font-semibold text-white leading-[1.4]', className)}
>
	{@render children?.()}
</div>
