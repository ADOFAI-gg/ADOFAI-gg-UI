<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { Snippet } from 'svelte';

	export type TitleAreaProps = {
		class?: string;
		children?: Snippet;
	};
</script>

<script lang="ts">
	const { class: className, children }: TitleAreaProps = $props();
</script>

<div class={cn('gap-2 flex flex-col', className)}>
	{@render children?.()}
</div>
