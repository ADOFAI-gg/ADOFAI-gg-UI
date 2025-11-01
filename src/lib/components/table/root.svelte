<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import type { RootProps } from './props.js';
	import { root } from './styles.js';

	let { ref = $bindable(null), class: className, children, ...restProps }: RootProps = $props();
</script>

<table bind:this={ref} {...restProps} class={cn(root(), className)}>
	{@render children?.()}
</table>
