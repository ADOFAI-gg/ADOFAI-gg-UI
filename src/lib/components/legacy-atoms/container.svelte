<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	export type ContainerProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		noPadding?: boolean;
		topMargin?: boolean;
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	let {
		children,
		class: className,
		noPadding = false,
		topMargin = false,
		...restProps
	}: ContainerProps = $props();

	const containerClass = $derived(
		cn(
			'w-full mx-auto',
			'sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1200px]',
			topMargin && 'mt-8',
			className
		)
	);
</script>

{#snippet content()}
	<div class={containerClass} {...restProps}>
		{@render children?.()}
	</div>
{/snippet}

{#if noPadding}
	{@render content()}
{:else}
	<div class="px-6">
		{@render content()}
	</div>
{/if}
