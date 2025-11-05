<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';

	export type DescriptionProps = DialogPrimitive.DescriptionProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), class: className, ...restProps }: DescriptionProps = $props();
</script>

<DialogPrimitive.Description
	class={cn('text-base text-white/80', className)}
	{...restProps}
	bind:ref
/>
