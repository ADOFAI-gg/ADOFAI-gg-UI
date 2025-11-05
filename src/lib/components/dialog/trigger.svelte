<script lang="ts" module>
	import { Dialog as DialogPrimitive } from 'bits-ui';

	export type TriggerProps = DialogPrimitive.TriggerProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), ...restProps }: TriggerProps = $props();
</script>

<DialogPrimitive.Trigger {...restProps} bind:ref />
