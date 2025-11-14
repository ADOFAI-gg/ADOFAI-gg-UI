<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import {
		Tooltip as TooltipPrimitive,
		type WithChildren,
		type WithoutChildrenOrChild
	} from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type TooltipProps = WithChildren<{
		rootProps?: WithoutChildrenOrChild<TooltipPrimitive.RootProps>;
		contentProps?: WithoutChildrenOrChild<Omit<TooltipPrimitive.ContentProps, 'forceMount'>>;
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		title?: Snippet;
	}> &
		WithoutChildrenOrChild<TooltipPrimitive.ProviderProps>;
</script>

<script lang="ts">
	const {
		children,
		trigger,
		rootProps,
		contentProps,
		title,
		delayDuration = 200,
		...providerProps
	}: TooltipProps = $props();

	const { class: contentClass, ...restContentProps } = $derived(contentProps ?? {});
</script>

<TooltipPrimitive.Provider {...providerProps} {delayDuration}>
	<TooltipPrimitive.Root {...rootProps}>
		<TooltipPrimitive.Trigger>
			{#snippet child({ props })}
				{@render trigger({ props })}
			{/snippet}
		</TooltipPrimitive.Trigger>

		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				class={cn(
					'p-4 rounded-2xl bg-gg-darkblue shadow-gg-popover gap-1 text-sm grid',

					'animate-in fade-in-0 zoom-in-90',
					'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-90',
					contentClass
				)}
				{...restContentProps}
				sideOffset={contentProps?.sideOffset ?? 8}
			>
				{#if title}
					<div class="text-sm font-semibold">
						{@render title()}
					</div>
				{/if}
				{#if children}
					<div class="text-white/60">
						{@render children()}
					</div>
				{/if}
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	</TooltipPrimitive.Root>
</TooltipPrimitive.Provider>
