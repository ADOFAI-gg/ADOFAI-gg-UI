<script lang="ts" module>
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';

	export type ActionProps = AlertDialogPrimitive.ActionProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), ...restProps }: ActionProps = $props();
</script>

<AlertDialogPrimitive.Action bind:ref {...restProps} />
