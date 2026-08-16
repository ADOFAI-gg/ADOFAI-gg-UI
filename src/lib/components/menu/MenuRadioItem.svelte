<script lang="ts" module>
	import { DropdownMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { tv, type VariantProps } from 'tailwind-variants';

	const menuRadioItem = tv({
		base: 'h-8 min-w-[180px] gap-2 px-4 flex cursor-pointer items-center bg-transparent transition-colors select-none',
		variants: {
			variant: {
				default: 'text-white data-[highlighted]:bg-white/20',
				danger: 'text-gg-red data-[highlighted]:bg-gg-red/20'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	});

	export type MenuRadioItemVariant = NonNullable<VariantProps<typeof menuRadioItem>['variant']>;
	export type MenuRadioItemProps = Omit<
		DropdownMenu.RadioItemProps,
		'children' | 'child' | 'value'
	> & {
		value: string;
		children?: Snippet<[]>;
		variant?: MenuRadioItemVariant;
	};
</script>

<script lang="ts">
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils/ui.js';
	import { MenuRadioContext, type MenuRadioContextData } from './symbols.js';

	let {
		children: content,
		value,
		variant = 'default',
		class: className,
		...restProps
	}: MenuRadioItemProps = $props();

	const { RadioItem } = getContext<MenuRadioContextData>(MenuRadioContext);
</script>

<RadioItem {...restProps} {value} class={cn(menuRadioItem({ variant }), className)}>
	{#snippet children({ checked })}
		<div class="size-4 relative shrink-0">
			{#if checked}
				<div class="size-2 bg-white absolute top-1/2 left-1/2 -translate-1/2 rounded-full"></div>
			{/if}
		</div>
		{@render content?.()}
	{/snippet}
</RadioItem>
