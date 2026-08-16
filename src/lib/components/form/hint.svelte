<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/ui.js';

	export type FormHintProps = {
		type: 'hint' | 'error';
		children?: Snippet;
		noPadding?: boolean;
		class?: string;
	};

	export type HintProps = FormHintProps;
</script>

<script lang="ts">
	let { type, children, noPadding = false, class: className }: FormHintProps = $props();

	const isError = $derived(type === 'error');
</script>

<div
	class={cn(
		'gap-2 text-sm font-medium flex items-center leading-[14px]',
		isError ? 'text-gg-red' : 'text-white',
		!noPadding && 'p-3',
		className
	)}
>
	<div class={cn('size-2 shrink-0 rounded-full', isError ? 'bg-gg-red' : 'bg-white/40')}></div>
	{@render children?.()}
</div>
