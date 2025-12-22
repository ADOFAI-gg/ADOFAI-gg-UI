<script lang="ts" module>
	import { Input, Popover } from '$lib/index.js';
	import { Command } from 'bits-ui';
	import { setContext, type Snippet } from 'svelte';
	import Item from './item.svelte';
	import { inputStyles } from '../form/input.svelte';
	import { PopoverSelectContext, type PopoverSelectContextType } from './context.js';
	import { Localized } from '@nubolab-ffwd/svelte-fluent';

	export type RootProps = {
		trigger: Snippet<[{ props: any }]>;
		onSelect?: (value: string) => void;
		children?: Snippet;
	};
</script>

<script lang="ts">
	const { trigger, onSelect, children }: RootProps = $props();

	let value = $state('');
	let listRef = $state<HTMLElement | null>(null);
	let open = $state(false);

	const currentText = $derived.by(() => {
		if (!listRef) return '';
		const item = listRef.querySelector(`[data-command-item][data-value="${value}"]`) as HTMLElement;
		if (item) return item.getAttribute('data-name');
		return '';
	});

	setContext(PopoverSelectContext, {
		select: (value) => {
			open = false;
			onSelect?.(value);
		}
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
