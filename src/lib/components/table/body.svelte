<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import type { BodyProps } from './props.js';
	import { body } from './styles.js';

	let { ref = $bindable(null), children, class: className, ...restProps }: BodyProps = $props();
</script>

<tbody bind:this={ref} {...restProps} class={cn(body(), className)}>
	{@render children?.()}
</tbody>
