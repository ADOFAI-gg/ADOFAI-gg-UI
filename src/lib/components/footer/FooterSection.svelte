<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type FooterSectionProps = {
		children?: Snippet;
	};
</script>

<script lang="ts">
	const { children }: FooterSectionProps = $props();
</script>

<section class="sm:flex-row sm:items-center sm:gap-2 flex w-full flex-col">
	<div class="sm:flex-row sm:gap-3 flex flex-col">
		{@render children?.()}
	</div>
</section>
