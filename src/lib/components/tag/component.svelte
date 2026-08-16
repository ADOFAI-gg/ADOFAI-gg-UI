<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	const tag = tv({
		base: 'inline-flex rounded-lg px-2 text-xl font-semibold leading-normal uppercase',
		variants: {
			color: {
				yellow: 'bg-gg-yellow text-[#3a3208]',
				blue: 'bg-gg-blue text-white',
				white: 'bg-white text-black',
				gray: 'bg-gg-gray text-white',
				darkblue: 'bg-gg-darkblue/20 text-white/80'
			}
		}
	});

	export type TagColor = NonNullable<VariantProps<typeof tag>['color']>;

	export type TagProps = {
		children: Snippet;
		color: TagColor;
	} & Omit<HTMLAttributes<HTMLSpanElement>, 'children'>;
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	const { children, color, class: className, ...restProps }: TagProps = $props();
</script>

<span {...restProps} class={cn(tag({ color }), className)}>{@render children()}</span>
