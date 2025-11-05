<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	export type OverlayProps = AlertDialogPrimitive.OverlayProps;
</script>

<script lang="ts">
	let { class: className, ref = $bindable(null), ...restProps }: OverlayProps = $props();
</script>

<AlertDialogPrimitive.Overlay
	bind:ref
	class={cn(
		'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
		'bg-black/40 inset-0 fixed z-50',
		className
	)}
	{...restProps}
/>
