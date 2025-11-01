<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import type { RowProps } from './props.js';
	import { row } from './styles.js';

	let { ref = $bindable(null), class: className, children, ...restProps }: RowProps = $props();
</script>

<tr bind:this={ref} {...restProps} class={cn(row(), className)}>
	{@render children?.()}
</tr>
