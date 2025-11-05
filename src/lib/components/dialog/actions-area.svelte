<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { Snippet } from 'svelte';

	export type ActionsAreaProps = {
		class?: string;
		left?: Snippet;
		right?: Snippet;
	};
</script>

<script lang="ts">
	const { class: className, left, right }: ActionsAreaProps = $props();
</script>

<div class={cn('gap-2 flex items-center justify-between', className)}>
	<div>{@render left?.()}</div>
	<div>{@render right?.()}</div>
</div>
