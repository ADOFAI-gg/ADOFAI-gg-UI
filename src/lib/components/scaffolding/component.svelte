<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type ScaffoldingProps = {
		nav?: Snippet;
		content?: Snippet;
		footer?: Snippet;
	};
</script>

<script lang="ts">
	const { nav, content, footer }: ScaffoldingProps = $props();
</script>

<div class="flex min-h-screen flex-col">
	{#if nav}
		<div class="top-0 left-0 sticky">
			{@render nav()}
		</div>
	{/if}

	{@render content?.()}
</div>

{@render footer?.()}
