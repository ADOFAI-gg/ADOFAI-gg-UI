<script lang="ts" module>
	import type { Snippet } from 'svelte';

	type PopoverSide = 'top' | 'bottom' | 'left' | 'right';
	type PopoverAlign = 'start' | 'end';

	export type LegacyPopoverPlacement = PopoverSide | `${PopoverSide}-${PopoverAlign}`;

	export type LegacyPopoverTrigger = Record<string, unknown> & {
		props?: Record<string, unknown>;
		trigger?: Record<string, unknown>;
	};

	export type LegacyPopoverProps = {
		placement?: LegacyPopoverPlacement;
		open?: boolean;
		defaultOpen?: boolean;
		trigger: Snippet<[LegacyPopoverTrigger]>;
		children?: Snippet<[{ close: () => void; open: boolean }]>;
	};
</script>

<script lang="ts">
	import { Popover as PopoverPrimitive } from 'bits-ui';
	import { fly } from 'svelte/transition';

	let {
		placement = 'bottom',
		open = $bindable(false),
		defaultOpen = false,
		trigger,
		children
	}: LegacyPopoverProps = $props();

	const side = $derived(placement.split('-')[0] as PopoverSide);
	const align = $derived(placement.split('-')[1] as PopoverAlign | undefined);

	let defaultOpenApplied = $state(false);
	$effect(() => {
		if (!defaultOpenApplied) {
			defaultOpenApplied = true;
			if (defaultOpen) open = true;
		}
	});

	const close = () => (open = false);
</script>

<PopoverPrimitive.Root bind:open>
	<PopoverPrimitive.Trigger>
		{#snippet child({ props })}
			{@render trigger(Object.assign({}, props, { props, trigger: props }))}
		{/snippet}
	</PopoverPrimitive.Trigger>

	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content {side} {align}>
			{#snippet child({ open: contentOpen, props, wrapperProps })}
				<div {...wrapperProps}>
					{#if contentOpen}
						<div {...props} class="z-50" transition:fly={{ y: 12, duration: 400 }}>
							{@render children?.({ close, open: contentOpen })}
						</div>
					{/if}
				</div>
			{/snippet}
		</PopoverPrimitive.Content>
	</PopoverPrimitive.Portal>
</PopoverPrimitive.Root>
