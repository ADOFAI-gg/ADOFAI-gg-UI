<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { Dialog as DialogPrimitive } from 'bits-ui';

	export type TitleProps = DialogPrimitive.TitleProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), class: className, ...restProps }: TitleProps = $props();
</script>

<DialogPrimitive.Title
	class={cn('font-medium text-center text-[1.75rem]', className)}
	{...restProps}
	bind:ref
/>
