<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { HTMLAttributes } from 'svelte/elements';

	export type RootProps = HTMLAttributes<HTMLUListElement>;
</script>

<script lang="ts">
	const { children, class: className, ...restProps }: RootProps = $props();
</script>

<ul class={cn('gap-2 flex flex-col', className)} {...restProps}>
	{@render children?.()}
</ul>
