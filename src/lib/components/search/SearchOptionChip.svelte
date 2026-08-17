<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { WithoutChildren } from 'bits-ui';
	import { tv } from 'tailwind-variants';

	const styles = tv({
		base: 'px-3 h-6 gap-1.5 text-sm flex cursor-pointer items-center justify-center rounded-full leading-[140%] transition-colors select-none',
		variants: {
			variant: {
				default: 'bg-white/10 hover:bg-white/15 active:bg-white/20 text-white',
				danger: 'bg-gg-red/20 hover:bg-gg-red/25 active:bg-gg-red/30 text-gg-red'
			}
		},
		defaultVariants: {
			variant: 'default'
		},
		slots: {
			icon: 'shrink-0',
			objective: 'shrink-0 font-bold',
			value: 'whitespace-nowrap overflow-hidden text-ellipsis shrink'
		}
	});

	export type SearchOptionChipProps = {
		icon: string;
		objectiveKey: string;
		children?: Snippet;
		hasValue?: boolean;
		danger?: boolean;
	} & Omit<WithoutChildren<HTMLButtonAttributes>, 'children'>;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { cn } from '$lib/utils/ui.js';

	let {
		icon,
		objectiveKey,
		children,
		hasValue = false,
		danger = false,
		class: className,
		...restProps
	}: SearchOptionChipProps = $props();

	const s = $derived(styles({ variant: danger ? 'danger' : 'default' }));
	const iconName = $derived(icon.includes(':') ? icon : `gg:${icon}`);
</script>

<button {...restProps} class={cn(s.base({ variant: danger ? 'danger' : 'default' }), className)}>
	<span class={s.icon()}>
		<Icon icon={iconName} class="size-4" />
	</span>
	<span class={s.objective()}>
		<Localized id={objectiveKey} />
	</span>
	{#if children && hasValue}
		<span class={s.value()}>{@render children()}</span>
	{/if}
</button>
