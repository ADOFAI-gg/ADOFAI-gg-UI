<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/ui.js';

	export type FormHintAreaProps = {
		modal?: boolean;
		children?: Snippet;
		columns?: number;
		class?: string;
	};

	export type HintAreaProps = FormHintAreaProps;
</script>

<script lang="ts">
	let { modal = false, children, columns = 1, class: className }: FormHintAreaProps = $props();
</script>

<div
	class={cn(
		'bg-gg-darkblue/20 grid rounded-b-[6px]',
		modal && 'bg-white/5',
		'grid-cols-[repeat(var(--hint-columns),1fr)]',
		className
	)}
	style={`--hint-columns: ${columns};`}
>
	{@render children?.()}
</div>
