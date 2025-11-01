<script lang="ts" module>
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { fly } from 'svelte/transition';

	export type ContentProps = {} & Omit<PopoverPrimitive.ContentProps, 'child' | 'forceMount'>;
</script>

<script lang="ts">
	let { ref = $bindable(null), children, ...restProps }: ContentProps = $props();
	let sans = $state(false);
</script>

<PopoverPrimitive.Content bind:ref {...restProps} forceMount>
	{#snippet child({ open, props, wrapperProps })}
		<div {...wrapperProps}>
			{#if open}
				<div
					{...props}
					transition:fly={{
						duration: 200,
						y: 10
					}}
					class="p-4 rounded-2xl bg-gg-darkblue shadow-popover z-50"
				>
					{@render children?.()}
				</div>
			{/if}
		</div>
	{/snippet}
</PopoverPrimitive.Content>
