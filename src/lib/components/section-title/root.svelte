<script lang="ts" module>
	import type { WithChildren } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type SectionTitleProps = WithChildren<{
		link?: Snippet;
	}>;
</script>

<script lang="ts">
	const { children }: SectionTitleProps = $props();
</script>

<header class="flex justify-between">
	<h2>{@render children?.()}</h2>
</header>
