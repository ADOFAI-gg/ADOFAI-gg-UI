<script lang="ts" module>
	const styles = tv({
		base: 'px-3 h-6 gap-1.5 text-sm flex cursor-pointer items-center justify-center rounded-full transition-colors select-none',
		variants: {
			variant: {
				default: 'bg-white/10 hover:bg-white/15 active:bg-white/20 text-white',
				danger: 'bg-gg-red/20 hover:bg-gg-red/25 active:bg-gg-red/30 text-gg-red',
				ghost: {
					base: 'text-white/40 hover:text-white',
					name: 'font-normal'
				}
			}
		},
		defaultVariants: {
			variant: 'default'
		},
		slots: {
			name: 'font-bold'
		}
	});

	export type SearchOptionsItemProps = {
		icon?: string;
		variant?: VariantProps<typeof styles>['variant'];
		name?: Snippet;
		value?: Snippet;
		extra?: Snippet;
		onclick?: () => void;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	import Icon from '@iconify/svelte';
	import type { Snippet } from 'svelte';
	import { tv, type VariantProps } from 'tailwind-variants';

	const { variant, icon, onclick, extra, name, value }: SearchOptionsItemProps = $props();
	const s = $derived(styles({ variant }));
</script>

<button class={cn(s.base({ variant }))} {onclick}>
	{#if icon}
		<Icon class="size-4" {icon} />
	{/if}
	{#if name}
		<span class={s.name()}>{@render name()}</span>
	{/if}
	{#if value}
		<span>{@render value()}</span>
	{/if}
	{#if extra}
		<span class="opacity-40">{@render extra()}</span>
	{/if}
</button>
