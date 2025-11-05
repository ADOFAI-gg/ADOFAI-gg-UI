<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	export type TitleProps = AlertDialogPrimitive.TitleProps;
</script>

<script lang="ts">
	let { class: className, ref = $bindable(null), ...restProps }: TitleProps = $props();
</script>

<AlertDialogPrimitive.Title
	bind:ref
	class={cn('font-medium text-center text-[1.75rem]', className)}
	{...restProps}
/>
