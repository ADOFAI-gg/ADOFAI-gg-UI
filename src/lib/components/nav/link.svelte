<script lang="ts">
	import type { LinkProps } from './props.js';

	const { href, children }: LinkProps = $props();
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a {href} class="text-base font-semibold">
	{@render children?.()}
</a>
