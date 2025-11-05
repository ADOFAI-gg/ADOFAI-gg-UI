<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { tv, type VariantProps } from 'tailwind-variants';

	const panel = tv({
		slots: {
			base: 'bg-gg-darkblue/20 grid gap-2 rounded-xl p-4',
			title: 'font-semibold text-sm opacity-60'
		},
		variants: {
			variant: {
				default: {
					base: '',
					title: 'text-white'
				},
				warning: {
					base: 'inset-ring-gg-yellow',
					title: 'text-gg-yellow'
				},
				danger: {
					base: 'inset-ring-gg-red',
					title: 'text-gg-red'
				}
			}
		},
		compoundVariants: [
			{
				variant: ['warning', 'danger'],
				class: {
					base: 'inset-ring'
				}
			}
		],
		defaultVariants: {
			variant: 'default'
		}
	});

	export type PanelVariant = VariantProps<typeof panel>['variant'];

	export type PanelProps = {
		variant?: PanelVariant;
		title?: Snippet;
	} & Omit<HTMLAttributes<HTMLDivElement>, 'title'>;
</script>

<script lang="ts">
	const {
		children,
		title: titleSlot,
		variant = 'default',
		class: className,
		...restProps
	}: PanelProps = $props();

	const { base, title } = panel();
</script>

<div {...restProps} class={cn(base({ variant }), className)}>
	{#if titleSlot}
		<div class={title({ variant })}>
			{@render titleSlot()}
		</div>
	{/if}
	{@render children?.()}
</div>
