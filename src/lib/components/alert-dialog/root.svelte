<script lang="ts" module>
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	export type RootProps = AlertDialogPrimitive.RootProps;
</script>

<script lang="ts">
	let { open = $bindable(false), children, ...restProps }: RootProps = $props();
</script>

<AlertDialogPrimitive.Root {...restProps} bind:open>
	{@render children?.()}
</AlertDialogPrimitive.Root>
