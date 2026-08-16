<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type TooltipDescriptionProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	let { children, class: className, ...restProps }: TooltipDescriptionProps = $props();
</script>

<div
	{...restProps}
	class={cn('tooltip-description text-sm font-normal text-white/60 leading-[1.4]', className)}
>
	{@render children?.()}
</div>
