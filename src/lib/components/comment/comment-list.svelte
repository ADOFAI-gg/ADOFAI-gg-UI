<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type CommentListProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	const { children, class: className, ...restProps }: CommentListProps = $props();
</script>

<div {...restProps} class={cn('gap-3 flex w-full flex-col', className)}>
	{@render children?.()}
</div>
