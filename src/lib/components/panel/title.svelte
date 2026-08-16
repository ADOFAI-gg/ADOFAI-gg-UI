<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type PanelTitleProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	let { children, class: className, ...restProps }: PanelTitleProps = $props();
</script>

<div
	{...restProps}
	class={cn('panel-title text-sm font-semibold text-white/60 leading-[1.2]', className)}
>
	{@render children?.()}
</div>
