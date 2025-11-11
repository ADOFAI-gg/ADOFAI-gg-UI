<script lang="ts" module>
	import {
		Tooltip as TooltipPrimitive,
		type WithChildren,
		type WithoutChildrenOrChild
	} from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { fly } from 'svelte/transition';

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
				forceMount
				{...contentProps}
				sideOffset={contentProps?.sideOffset ?? 8}
			>
				{#snippet child({ open, wrapperProps, props })}
					<div {...wrapperProps}>
						{#if open}
							<div
								{...props}
								transition:fly={{ duration: 200, y: 8 }}
								class="p-4 rounded-2xl bg-gg-darkblue shadow-gg-popover gap-1 text-sm pointer-events-none grid"
							>
								{#if title}
									<div class="text-sm font-semibold">
										{@render title()}
									</div>
								{/if}
								{@render children?.()}
							</div>
						{/if}
					</div>
				{/snippet}
			</TooltipPrimitive.Content>
		</TooltipPrimitive.Portal>
	</TooltipPrimitive.Root>
</TooltipPrimitive.Provider>
