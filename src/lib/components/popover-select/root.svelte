<script lang="ts" module>
	import { Popover } from '$lib/index.js';
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { Command } from 'bits-ui';
	import { setContext, type Snippet } from 'svelte';
	import { inputStyles } from '../form/input.svelte';
	import { PopoverSelectContext, type PopoverSelectContextType } from './context.js';

	export type RootProps = {
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		open?: boolean;
		value?: string;
		hasValue?: boolean;
		selectedValue?: string;
		onSelect?: (value: string) => void;
		children?: Snippet;
	};
</script>

<script lang="ts">
	let {
		trigger,
		onSelect,
		children,
		hasValue = false,
		open = $bindable(false),
		value = $bindable(''),
		selectedValue = ''
	}: RootProps = $props();

	let listRef = $state<HTMLElement | null>(null);

	const currentText = $derived.by(() => {
		if (!listRef) return '';
		const item = listRef.querySelector(`[data-command-item][data-value="${value}"]`) as HTMLElement;
		if (item) return item.getAttribute('data-name');
		return '';
	});

	let currentValue = $state({
		current: ''
	});

	$effect(() => {
		currentValue.current = selectedValue;
	});

	setContext(PopoverSelectContext, {
		select: (value) => {
			open = false;
			onSelect?.(value);
		},
		hasValue,
		value: currentValue
	} as PopoverSelectContextType);
</script>

<Popover.Root bind:open>
	<Popover.Trigger child={trigger} />
	<Popover.Portal>
		<Popover.Content>
			<Command.Root class="w-[280px]" bind:value>
				<Command.Input class={inputStyles({ variant: 'outlined' })} placeholder={currentText} />
				<Command.List class="mt-2" bind:ref={listRef}>
					<Command.Empty class="py-2 text-white/40 text-center select-none">
						<Localized id="lib-search-options-empty" />
					</Command.Empty>

					{@render children?.()}
				</Command.List>
			</Command.Root>
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
