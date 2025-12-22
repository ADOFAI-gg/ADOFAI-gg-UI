<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { tv } from 'tailwind-variants';

	export type InputProps = WithElementRef<HTMLInputAttributes>;

	const styles = tv({
		base: 'h-[38px] w-full bg-transparent border-0 focus:ring-0 text-base font-sans p-0 placeholder:text-white/60 border-white/20',
		variants: {
			variant: {
				default: 'border-b'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});
</script>

<script lang="ts">
	let {
		class: className,
		value = $bindable(),
		ref = $bindable(null),
		...restProps
	}: InputProps = $props();
</script>

<input class={cn(styles(), className)} bind:value bind:this={ref} {...restProps} />
