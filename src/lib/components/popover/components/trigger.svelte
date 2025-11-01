<script lang="ts" module>
	import { Popover as PopoverPrimitive } from 'bits-ui';

	export type TriggerProps = {} & PopoverPrimitive.TriggerProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), ...restProps }: TriggerProps = $props();
</script>

<PopoverPrimitive.Trigger bind:ref {...restProps} />
