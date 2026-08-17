<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { HTMLAttributes } from 'svelte/elements';

	export type CommentTextProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		text: string;
	};
</script>

<script lang="ts">
	const { text, class: className, ...restProps }: CommentTextProps = $props();
</script>

<div {...restProps} class={cn('whitespace-pre-wrap', className)}>{text}</div>
