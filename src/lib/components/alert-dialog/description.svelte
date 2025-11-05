<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	export type DescriptionProps = AlertDialogPrimitive.DescriptionProps;
</script>

<script lang="ts">
	let { class: className, ref = $bindable(null), ...restProps }: DescriptionProps = $props();
</script>

<AlertDialogPrimitive.Description
	bind:ref
	class={cn('text-base text-white/80 text-center', className)}
	{...restProps}
/>
