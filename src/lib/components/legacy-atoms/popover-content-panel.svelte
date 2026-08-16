<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	export type PopoverContentPanelProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	let { children, class: className, ...restProps }: PopoverContentPanelProps = $props();
</script>

<div
	{...restProps}
	class={cn('gap-2 bg-gg-darkblue p-4 shadow-gg-popover rounded-2xl flex flex-col', className)}
>
	{@render children?.()}
</div>
