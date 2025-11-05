<script lang="ts" module>
	import { Dialog as DialogPrimitive } from 'bits-ui';

	export type CloseProps = DialogPrimitive.CloseProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), ...restProps }: CloseProps = $props();
</script>

<DialogPrimitive.Close {...restProps} bind:ref />
