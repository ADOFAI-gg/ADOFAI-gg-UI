<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import type { HeadProps } from './props.js';
	import { head } from './styles.js';

	let { ref = $bindable(null), children, class: className, ...restProps }: HeadProps = $props();
</script>

<th bind:this={ref} {...restProps} class={cn(head(), className)}>
	{@render children?.()}
</th>
