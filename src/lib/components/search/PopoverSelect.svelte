<script lang="ts" module>
	import type { Snippet } from 'svelte';

	type SelectOption<CustomData = unknown> = {
		value: string;
		label: string;
		subtitle?: string;
		icon?: string;
		color?: 'default' | 'blue';
		disabled?: boolean;
		customData?: CustomData;
	};

	type SelectGroup<CustomData = unknown> = {
		title?: string;
		options: SelectOption<CustomData>[];
	};

	export type PopoverSelectProps<CustomData = unknown> = {
		items: SelectGroup<CustomData>[];
		placeholder?: (label: string | null, value: string | null, lang: string) => string;
		value?: string;
		inputValue?: string;
		customFilter?: boolean;
		subtitleTemplate?: Snippet<[SelectOption<CustomData>]>;
		iconTemplate?: Snippet<[SelectOption<CustomData>]>;
		select?: boolean;
		onSelect?: (value: string) => void;
		loading?: boolean;
		open?: boolean;
		trigger: Snippet<[{ props: Record<string, unknown> }]>;
		children?: Snippet;
	};
</script>

<script lang="ts" generics="CustomData = unknown">
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';
	import { Command } from 'bits-ui';
	import { setContext } from 'svelte';
	import * as Popover from '../popover/index.js';
	import { inputStyles } from '../form/input.svelte';
	import LoadingSpinner from '../loading-spinner/component.svelte';
	import ComboboxItem from './ComboboxItem.svelte';
	import {
		PopoverSelectContext,
		type PopoverSelectContextType
	} from '../popover-select/context.js';
	import { getGlobalContext } from '$lib/utils/context.js';

	let {
		items,
		value = $bindable(),
		inputValue = $bindable(''),
		select = false,
		open = $bindable(false),
		trigger: triggerSnippet,
		onSelect,
		placeholder = (label) => label || '',
		customFilter = false,
		subtitleTemplate,
		iconTemplate,
		loading = false,
		children
	}: PopoverSelectProps<CustomData> = $props();

	const { localize } = getFluentContext();
	const globalContext = getGlobalContext();

	const normalize = (text: string) => text.normalize().toLowerCase();

	const filteredItems = $derived.by(() => {
		if (customFilter) return items;

		return items
			.map((group) => ({
				...group,
				options: group.options.filter((option) =>
					normalize(option.label).includes(normalize(inputValue))
				)
			}))
			.filter((group) => group.options.length > 0);
	});

	const currentItem = $derived(
		filteredItems.flatMap((group) => group.options).find((option) => option.value === value)
	);

	const convertedPlaceholder = $derived(
		placeholder(
			currentItem?.label || null,
			currentItem?.value?.toString() || null,
			globalContext.currentLanguage
		)
	);

	const selectValue = (nextValue: string) => {
		value = nextValue;
		open = false;
		onSelect?.(nextValue);
	};

	const currentValue = $state({ current: value ?? '' });

	$effect(() => {
		currentValue.current = value ?? '';
	});

	setContext(PopoverSelectContext, {
		select: selectValue,
		hasValue: select,
		value: currentValue
	} as PopoverSelectContextType);
</script>

<Popover.Root bind:open>
	<Popover.Trigger child={triggerSnippet} />
	<Popover.Portal>
		<Popover.Content>
			<div class="w-[312px] max-w-[calc(100vw-2rem)]">
				<Command.Root bind:value shouldFilter={false}>
					<div class="relative">
						<Command.Input
							class={inputStyles({ variant: 'outlined' })}
							bind:value={inputValue}
							placeholder={convertedPlaceholder}
						/>
						{#if loading}
							<div class="right-4 pointer-events-none absolute top-1/2 -translate-y-1/2">
								<LoadingSpinner size={18} />
							</div>
						{/if}
					</div>

					<Command.List class="mt-2 max-h-[400px] overflow-y-auto">
						<Command.Empty class="py-2 text-white/40 text-center select-none">
							{localize('lib-search-options-empty')}
						</Command.Empty>

						{#if children}
							{@render children()}
						{:else}
							{#each filteredItems as group, groupIndex (groupIndex)}
								<Command.Group value={`group-${groupIndex}`}>
									{#if group.title}
										<Command.GroupHeading
											class="px-4 pt-4 pb-0.5 text-sm font-semibold text-white/60"
										>
											{group.title}
										</Command.GroupHeading>
									{/if}

									{#each group.options as item (item.value)}
										<ComboboxItem
											option={item}
											{select}
											{subtitleTemplate}
											{iconTemplate}
											onSelect={() => selectValue(item.value)}
										/>
									{/each}
								</Command.Group>
							{/each}
						{/if}
					</Command.List>
				</Command.Root>
			</div>
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
