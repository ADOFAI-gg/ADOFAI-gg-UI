<script lang="ts">
	import type { LinkProps } from './props.js';

	const { href, children }: LinkProps = $props();
</script>

<a {href} class="text-base font-semibold">
	{@render children?.()}
</a>
