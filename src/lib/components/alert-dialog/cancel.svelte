<script lang="ts" module>
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	export type CancelProps = AlertDialogPrimitive.CancelProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), ...restProps }: CancelProps = $props();
</script>

<AlertDialogPrimitive.Cancel bind:ref {...restProps} />
