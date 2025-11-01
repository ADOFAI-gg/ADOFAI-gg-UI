<script lang="ts" module>
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { fly } from 'svelte/transition';

	export type ContentProps = {} & Omit<PopoverPrimitive.ContentProps, 'child' | 'forceMount'>;
</script>

<script lang="ts">
	let { ref = $bindable(null), children, sideOffset = 8, ...restProps }: ContentProps = $props();
</script>

<PopoverPrimitive.Content bind:ref {...restProps} {sideOffset} forceMount>
	{#snippet child({ open, props, wrapperProps })}
		<div {...wrapperProps}>
			{#if open}
				<div
					{...props}
					transition:fly={{
						duration: 200,
						y: 10
					}}
					class="p-4 rounded-2xl bg-gg-darkblue shadow-gg-popover z-50"
				>
					{@render children?.()}
				</div>
			{/if}
		</div>
	{/snippet}
</PopoverPrimitive.Content>
