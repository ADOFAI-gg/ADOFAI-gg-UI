<script lang="ts" module>
	import { Dialog as DialogPrimitive } from 'bits-ui';

	export type RootProps = DialogPrimitive.RootProps;
</script>

<script lang="ts">
	let { open = $bindable(false), children, ...restProps }: RootProps = $props();
</script>

<DialogPrimitive.Root {...restProps} bind:open>
	{@render children?.()}
</DialogPrimitive.Root>
