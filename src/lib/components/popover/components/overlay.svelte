<script lang="ts" module>
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { fade } from 'svelte/transition';

	export type OverlayProps = {} & PopoverPrimitive.OverlayProps;
</script>

<script lang="ts">
	let { ...restProps }: OverlayProps = $props();
</script>

<PopoverPrimitive.Overlay forceMount {...restProps}>
	{#snippet child({ open, props })}
		{#if open}
			<div
				class="inset-0 bg-black/60 fixed z-40"
				transition:fade={{
					duration: 200
				}}
				{...props}
			></div>
		{/if}
	{/snippet}
</PopoverPrimitive.Overlay>
