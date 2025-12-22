<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { Label as LabelPrimitive } from 'bits-ui';
	export type LabelProps = LabelPrimitive.RootProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), class: className, ...restProps }: LabelProps = $props();
</script>

<LabelPrimitive.Root bind:ref class={cn('text-base font-medium', className)} {...restProps} />
