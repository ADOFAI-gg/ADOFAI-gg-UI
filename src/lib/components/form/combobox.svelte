<script lang="ts" module>
	import type { Combobox as ComboboxPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type ComboboxItem<Value = unknown, CustomData = unknown> = {
		value: Value;
		label: string;
		subtitle?: string;
		icon?: string;
		disabled?: boolean;
		customData?: CustomData;
		color?: 'default' | 'blue';
	};

	export type ComboboxSelection<Value = unknown, CustomData = unknown> =
		| ComboboxItem<Value, CustomData>
		| ComboboxItem<Value, CustomData>[]
		| null;

	export type ComboboxTemplates<Value = unknown, CustomData = unknown> = {
		icon?: Snippet<[ComboboxItem<Value, CustomData>]>;
		subtitle?: Snippet<[ComboboxItem<Value, CustomData>]>;
		iconTemplate?: Snippet<[ComboboxItem<Value, CustomData>]>;
		subtitleTemplate?: Snippet<[ComboboxItem<Value, CustomData>]>;
	};

	export type ComboboxProps<Value = unknown, CustomData = unknown> = Omit<
		ComboboxPrimitive.RootProps,
		'type' | 'value' | 'open' | 'inputValue' | 'items' | 'children' | 'onValueChange'
	> & {
		items: ComboboxItem<Value, CustomData>[];
		open?: boolean;
		value?: Value | Value[] | null;
		placeholder?: string;
		multiple?: boolean;
		inputValue?: string;
		clearable?: boolean;
		loading?: boolean;
		customFilter?: boolean;
		class?: string;
		subtitleTemplate?: Snippet<[ComboboxItem<Value, CustomData>]>;
		iconTemplate?: Snippet<[ComboboxItem<Value, CustomData>]>;
		templates?: ComboboxTemplates<Value, CustomData>;
		onSelectedChange?: (change: {
			curr: ComboboxSelection<Value, CustomData>;
			next: ComboboxSelection<Value, CustomData>;
		}) => ComboboxSelection<Value, CustomData> | false | void;
	};
</script>

<script lang="ts" generics="Value = unknown, CustomData = unknown">
	import { Combobox } from 'bits-ui';
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Icon from '@iconify/svelte';
	import type { ComboboxItem as ComboboxOption } from './combobox.svelte';
	import ComboboxItemComponent from './combobox-item.svelte';
	import LoadingSpinner from '../loading-spinner/component.svelte';
	import { cn } from '$lib/utils/ui.js';

	type Entry = {
		id: string;
		item: ComboboxOption<Value, CustomData>;
	};

	let {
		class: className,
		items,
		open = $bindable(false),
		value = $bindable(),
		inputValue = $bindable(''),
		placeholder,
		multiple = false,
		clearable = false,
		loading = false,
		customFilter = false,
		subtitleTemplate,
		iconTemplate,
		templates,
		onSelectedChange,
		...restProps
	}: ComboboxProps<Value, CustomData> = $props();

	let triggerWidth = $state(0);
	let actionsWidth = $state(0);
	let inputTouched = $state(false);

	const resolvedIconTemplate = $derived(templates?.icon ?? templates?.iconTemplate ?? iconTemplate);
	const resolvedSubtitleTemplate = $derived(
		templates?.subtitle ?? templates?.subtitleTemplate ?? subtitleTemplate
	);

	const entries = $derived.by<Entry[]>(() =>
		items.map((item, index) => ({ id: `combobox-item-${index}`, item }))
	);

	const primitiveItems = $derived(
		entries.map(({ id, item }) => ({ value: id, label: item.label, disabled: item.disabled }))
	);

	const selectedItem = $derived.by<Entry | undefined>(() => {
		if (multiple || Array.isArray(value) || value === null || value === undefined) return undefined;
		return entries.find(({ item }) => Object.is(item.value, value));
	});

	const selectedItems = $derived.by<Entry[]>(() => {
		if (!multiple || !Array.isArray(value)) return [];
		const selectedValues = value as Value[];
		return entries.filter(({ item }) =>
			selectedValues.some((selected) => Object.is(selected, item.value))
		);
	});

	const selectedId = $derived(selectedItem?.id ?? '');
	const selectedIds = $derived(selectedItems.map(({ id }) => id));

	const filteredEntries = $derived.by<Entry[]>(() => {
		if (customFilter || !inputTouched || !inputValue) return entries;
		const query = inputValue.toLowerCase();
		return entries.filter(({ item }) => item.label.toLowerCase().includes(query));
	});

	const currentPlaceholder = $derived(
		multiple && selectedItems.length > 0
			? selectedItems.map(({ item }) => item.label).join(', ')
			: placeholder
	);

	const currentSelection = (): ComboboxSelection<Value, CustomData> =>
		multiple ? selectedItems.map(({ item }) => item) : (selectedItem?.item ?? null);

	const valueFromSelection = (
		selection: ComboboxSelection<Value, CustomData>
	): Value | Value[] | null => {
		if (Array.isArray(selection)) return selection.map((item) => item.value);
		return selection?.value ?? null;
	};

	const applySelection = (next: ComboboxSelection<Value, CustomData>) => {
		const result = onSelectedChange?.({ curr: currentSelection(), next });
		if (result === false) return;

		const accepted = result === undefined ? next : result;
		value = valueFromSelection(accepted);
		inputValue = Array.isArray(accepted) ? (accepted.at(-1)?.label ?? '') : (accepted?.label ?? '');
		inputTouched = false;
	};

	const handleSingleValueChange = (id: string) => {
		applySelection(entries.find((entry) => entry.id === id)?.item ?? null);
	};

	const handleMultipleValueChange = (ids: string[]) => {
		applySelection(entries.filter(({ id }) => ids.includes(id)).map(({ item }) => item));
	};

	const clearSelection = () => {
		applySelection(multiple ? [] : null);
	};

	const handleInput = (event: Event) => {
		inputValue = (event.currentTarget as HTMLInputElement).value;
		inputTouched = true;
	};

	$effect(() => {
		if (!open) {
			inputTouched = false;
			inputValue = multiple ? '' : (selectedItem?.item.label ?? '');
		}
	});

	$effect(() => {
		if (multiple && open && !inputTouched) inputValue = '';
	});
</script>

{#snippet comboboxContent()}
	<div
		class={cn(
			'rounded-lg border-white/20 relative flex h-[38px] w-full items-center border',
			'focus-within:border-white/40',
			className
		)}
		bind:offsetWidth={triggerWidth}
	>
		{#if !multiple && selectedItem}
			{#if resolvedIconTemplate || selectedItem.item.icon}
				<div
					class="left-4 size-4.5 pointer-events-none absolute z-10 flex items-center justify-center"
				>
					{#if resolvedIconTemplate}
						{@render resolvedIconTemplate(selectedItem.item)}
					{:else if selectedItem.item.icon}
						<Icon
							icon={selectedItem.item.icon.includes(':')
								? selectedItem.item.icon
								: `gg:${selectedItem.item.icon}`}
							class="size-4.5"
						/>
					{/if}
				</div>
			{/if}
		{/if}

		<Combobox.Input
			class={cn(
				'inset-0 text-base placeholder:text-white/60 absolute h-full w-full border-0 bg-transparent ring-0 outline-none focus:border-0 focus:ring-0',
				!multiple && selectedItem && (resolvedIconTemplate || selectedItem.item.icon)
					? 'pl-10'
					: 'pl-4'
			)}
			style={`padding-right: calc(${actionsWidth}px + 1rem);`}
			placeholder={currentPlaceholder}
			onclick={() => (open = true)}
			oninput={handleInput}
		/>

		<div class="right-4 gap-2 absolute flex items-center" bind:offsetWidth={actionsWidth}>
			{#if clearable && (selectedItem || selectedItems.length > 0)}
				<button
					class="size-4.5 text-white/60 hover:text-white flex items-center justify-center transition-colors"
					type="button"
					aria-label="Clear selection"
					onclick={clearSelection}
				>
					<svg aria-hidden="true" class="size-4" viewBox="0 0 16 16" fill="none">
						<path
							d="m4 4 8 8M12 4l-8 8"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-width="1.5"
						/>
					</svg>
				</button>
			{/if}

			<Combobox.Trigger
				class="size-4.5 text-white/60 hover:text-white flex items-center justify-center transition-colors"
				type="button"
				aria-label="Open options"
			>
				{#if loading}
					<LoadingSpinner size={18} />
				{:else}
					<Icon icon="gg:arrow-bottom" class="size-4.5" />
				{/if}
			</Combobox.Trigger>
		</div>
	</div>

	<Combobox.Portal>
		<Combobox.Content
			class="rounded-2xl bg-gg-darkblue p-4 shadow-gg-popover z-50 w-[var(--combobox-width)] max-w-[calc(100vw-2rem)]"
			style={`--combobox-width: ${triggerWidth}px;`}
			side="bottom"
			align="start"
			sideOffset={8}
		>
			<Combobox.Viewport class="max-h-[300px] overflow-y-auto">
				{#each filteredEntries as entry (entry.id)}
					<ComboboxItemComponent
						id={entry.id}
						option={entry.item}
						iconTemplate={resolvedIconTemplate}
						subtitleTemplate={resolvedSubtitleTemplate}
					/>
				{:else}
					<div class="py-2 text-center text-base text-white/60 select-none">
						<Localized id="lib-no-options" />
					</div>
				{/each}
			</Combobox.Viewport>
		</Combobox.Content>
	</Combobox.Portal>
{/snippet}

{#if multiple}
	<Combobox.Root
		{...restProps}
		type="multiple"
		bind:open
		value={selectedIds}
		{inputValue}
		items={primitiveItems}
		onValueChange={handleMultipleValueChange}
	>
		{@render comboboxContent()}
	</Combobox.Root>
{:else}
	<Combobox.Root
		{...restProps}
		type="single"
		bind:open
		value={selectedId}
		{inputValue}
		items={primitiveItems}
		onValueChange={handleSingleValueChange}
	>
		{@render comboboxContent()}
	</Combobox.Root>
{/if}
