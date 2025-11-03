<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = {} & HTMLAnchorAttributes;

	const { class: className, children, ...props }: Props = $props();
</script>

<a {...props} class={cn('text-sm opacity-80 transition-opacity hover:opacity-100', className)}>
	{@render children?.()}
</a>
