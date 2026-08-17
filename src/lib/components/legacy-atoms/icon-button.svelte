<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export type IconButtonProps = Omit<HTMLButtonAttributes, 'children'> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	let { children, class: className, ...restProps }: IconButtonProps = $props();
</script>

<button
	{...restProps}
	class={cn(
		'size-6 relative rounded-full transition-colors',
		'after:size-8 after:pointer-events-none after:absolute after:top-1/2 after:left-1/2',
		'after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full',
		"after:bg-gg-darkblue/0 after:transition-colors after:content-['']",
		'hover:after:bg-gg-darkblue/10 active:after:bg-gg-darkblue/20',
		className
	)}
>
	{@render children?.()}
</button>
