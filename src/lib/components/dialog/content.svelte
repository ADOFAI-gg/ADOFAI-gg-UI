<script lang="ts" module>
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils/ui.js';

	export type ContentProps = DialogPrimitive.ContentProps;
</script>

<script lang="ts">
	let { ref = $bindable(null), class: className, ...restProps }: ContentProps = $props();
</script>

<DialogPrimitive.Content
	{...restProps}
	bind:ref
	class={cn(
		// Transitions
		'data-[state=open]:animate-in data-[state=closed]:animate-out',
		'data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0',
		'data-[state=open]:slide-in-from-bottom-4 data-[state=closed]:slide-out-to-bottom-4',

		// Styles
		'bg-gg-darkblue fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
		'p-8 rounded-xl gap-6 grid w-[564px]',

		// Rest
		className
	)}
/>
