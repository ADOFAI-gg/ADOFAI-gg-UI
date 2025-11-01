<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import type { CellProps } from './props.js';
	import { cell } from './styles.js';

	let { ref = $bindable(null), children, class: className, ...restProps }: CellProps = $props();
</script>

<td bind:this={ref} {...restProps} class={cn(cell(), className)}>
	{@render children?.()}
</td>
