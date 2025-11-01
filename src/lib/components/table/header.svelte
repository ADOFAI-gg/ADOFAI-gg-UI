<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import type { HeaderProps } from './props.js';
	import { header } from './styles.js';

	let { ref = $bindable(null), children, class: className, ...restProps }: HeaderProps = $props();
</script>

<thead bind:this={ref} {...restProps} class={cn(header(), className)}>
	{@render children?.()}
</thead>
