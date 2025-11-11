<script lang="ts" module>
	import type { WithChildren } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type SectionTitleProps = WithChildren<{
		link?: Snippet;
	}>;
</script>

<script lang="ts">
	const { children, link }: SectionTitleProps = $props();
</script>

<header class="gap-8 pb-2 border-b-white/20 flex items-end justify-between border-b-2">
	<h2 class="text-2xl font-semibold">{@render children?.()}</h2>

	{@render link?.()}
</header>
