<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import {
		Tooltip as TooltipPrimitive,
		type WithChildren,
		type WithoutChildrenOrChild
	} from 'bits-ui';
	import type { Snippet } from 'svelte';

	type TooltipSide = NonNullable<TooltipPrimitive.ContentProps['side']>;
	type TooltipAlign = Exclude<NonNullable<TooltipPrimitive.ContentProps['align']>, 'center'>;

	export type TooltipPlacement = TooltipSide | `${TooltipSide}-${TooltipAlign}`;

	export type TooltipTriggerSnippetProps = {
		props: Record<string, unknown>;
		trigger: Record<string, unknown>;
	};

	export type TooltipProps = WithChildren<{
		rootProps?: WithoutChildrenOrChild<TooltipPrimitive.RootProps>;
		contentProps?: WithoutChildrenOrChild<Omit<TooltipPrimitive.ContentProps, 'forceMount'>>;
		trigger: Snippet<[TooltipTriggerSnippetProps]>;
		title?: Snippet;
		placement?: TooltipPlacement;
		closeOnPointerDown?: boolean;
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
		placement = 'bottom',
		closeOnPointerDown = true,
		delayDuration = 200,
		...providerProps
	}: TooltipProps = $props();

	const {
		class: contentClass,
		side: contentSide,
		align: contentAlign,
		sideOffset: contentSideOffset,
		...restContentProps
	} = $derived(contentProps ?? {});

	const side = $derived(
		(contentSide ?? placement.split('-')[0]) as NonNullable<TooltipPrimitive.ContentProps['side']>
	);
	const align = $derived(
		(contentAlign ?? placement.split('-')[1]) as
			| NonNullable<TooltipPrimitive.ContentProps['align']>
			| undefined
	);
	const mergedRootProps = $derived({
		...rootProps,
		disableCloseOnTriggerClick: rootProps?.disableCloseOnTriggerClick ?? !closeOnPointerDown
	});
</script>

<TooltipPrimitive.Provider {...providerProps} {delayDuration}>
	<TooltipPrimitive.Root {...mergedRootProps}>
		<TooltipPrimitive.Trigger>
			{#snippet child({ props })}
				{@render trigger({ props, trigger: props })}
			{/snippet}
		</TooltipPrimitive.Trigger>

		<TooltipPrimitive.Portal>
			<TooltipPrimitive.Content
				class={cn(
					'p-4 rounded-2xl bg-gg-darkblue shadow-gg-popover gap-1 text-sm grid max-w-[240px]',

					'animate-in fade-in-0 zoom-in-90',
					'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-90',
					contentClass
				)}
				{...restContentProps}
				{side}
				{align}
				sideOffset={contentSideOffset ?? 8}
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
