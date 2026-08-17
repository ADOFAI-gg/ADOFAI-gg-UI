<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/ui.js';

	export type ImageSelectorEditIconProps = Omit<HTMLButtonAttributes, 'children'> & {
		children?: Snippet;
	};
</script>

<script lang="ts">
	let {
		children,
		class: className,
		type = 'button',
		...restProps
	}: ImageSelectorEditIconProps = $props();
</script>

<button
	{...restProps}
	{type}
	class={cn(
		'image-selector-edit-icon top-2 right-2 size-9 bg-gg-darkblue/40 text-white absolute z-20 flex items-center justify-center rounded-full transition-colors',
		'hover:bg-gg-darkblue/60 disabled:hover:bg-gg-darkblue/40 cursor-pointer disabled:cursor-default',
		className
	)}
>
	{@render children?.()}
</button>
