<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';

	export type OverlayProps = DialogPrimitive.OverlayProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), class: className, ...restProps }: OverlayProps = $props();
</script>

<DialogPrimitive.Overlay
	{...restProps}
	class={cn(
		'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
		'bg-black/40 inset-0 fixed z-50',
		className
	)}
	bind:ref
/>
