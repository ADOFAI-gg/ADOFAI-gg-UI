<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

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
	class={cn(
		'popover-content-panel gap-2 rounded-2xl p-4 shadow-gg-popover flex flex-col bg-[#12152c]',
		className
	)}
>
	{@render children?.()}
</div>
