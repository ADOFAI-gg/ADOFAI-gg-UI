<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type IconProviderProps = {
		children?: Snippet;
	};
</script>

<script lang="ts">
	let { children }: IconProviderProps = $props();
</script>

{@render children?.()}
