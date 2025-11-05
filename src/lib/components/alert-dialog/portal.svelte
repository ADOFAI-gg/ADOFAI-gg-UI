<script lang="ts" module>
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	export type PortalProps = AlertDialogPrimitive.PortalProps;
</script>

<script lang="ts">
	let { children, ...restProps }: PortalProps = $props();
</script>

<AlertDialogPrimitive.Portal {...restProps}>
	{@render children?.()}
</AlertDialogPrimitive.Portal>
