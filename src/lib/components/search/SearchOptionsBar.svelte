<script lang="ts" module>
	import type { Snippet } from 'svelte';

	/**
	 * The pre-beta search options API.  These declarations intentionally stay
	 * local to the compatibility component; the beta API uses FilterScheme.
	 */
	export type SearchSelectOption = {
		value: string | number;
		label: string;
		subtitle?: string;
		icon?: string;
		disabled?: boolean;
		customData?: unknown;
		color?: 'default' | 'blue';
	};

	export type SearchFilterScheme = (
		| {
				type: 'string';
				label: string;
		  }
		| {
				type: 'select';
				label: string;
				options: SearchSelectOption[];
				multiple?: boolean;
				optionIconSnippet?: Snippet<[SearchSelectOption]>;
		  }
		| {
				type: 'range';
				min?: number;
				max?: number;
				minLabel: string;
				maxLabel: string;
		  }
		| {
				type: 'rangeSelect';
				minLabel: string;
				maxLabel: string;
				options: SearchSelectOption[];
				optionIconSnippet?: Snippet<[SearchSelectOption]>;
		  }
	) & {
		icon: string;
		name: string;
		default: unknown;
	};

	export type SearchSortScheme = {
		name: string;
		icon?: string;
		objective: string;
	};

	export type SearchOptionScheme = {
		sort: SearchSortScheme[];
		filter: Record<string, SearchFilterScheme>;
	} & (
		| {
				pageSize: number[];
				defaultPageSize: number;
		  }
		| {
				pageSize?: false;
		  }
	);

	export type SearchFilter = {
		id: string;
		key: string;
		value: unknown;
	};

	export type SearchOptionsData = {
		filter: SearchFilter[];
		sort: string;
		pageSize?: number;
	};

	export type SearchOptionsBarProps = {
		scheme: SearchOptionScheme;
		data: SearchOptionsData;
	};
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import ComboboxComponent, { type ComboboxSelection } from '../form/combobox.svelte';
	import * as PopoverSelect from '../popover-select/index.js';
	import Item from '../search-options/item.svelte';
	import BetaSearchOptionsBar from '../search-options/root.svelte';
	import type { FilterControlProp, FilterScheme } from '../search-options/types.js';

	let { scheme, data = $bindable() }: SearchOptionsBarProps = $props();

	type LegacyOption = SearchSelectOption;
	type SelectOptions = {
		options: LegacyOption[];
		multiple?: boolean;
		optionIconSnippet?: Snippet<[LegacyOption]>;
	};

	const optionList = (options: unknown): LegacyOption[] => {
		if (Array.isArray(options)) return options as LegacyOption[];
		if (options && typeof options === 'object' && 'options' in options) {
			const nested = (options as SelectOptions).options;
			return Array.isArray(nested) ? nested : [];
		}
		return [];
	};

	const selectOptions = (options: unknown): SelectOptions => {
		if (options && typeof options === 'object' && 'options' in options) {
			const configured = options as SelectOptions;
			return {
				options: optionList(configured.options),
				multiple: configured.multiple,
				optionIconSnippet: configured.optionIconSnippet
			};
		}
		return { options: optionList(options) };
	};

	const updateRange = (
		value: unknown,
		index: 0 | 1,
		rawValue: string
	): [number | undefined, number | undefined] => {
		const next = Array.isArray(value) ? [...value] : [undefined, undefined];
		next[index] = rawValue === '' ? undefined : Number(rawValue);
		return [next[0] as number | undefined, next[1] as number | undefined];
	};

	const optionLabel = (value: unknown) => {
		for (const definition of Object.values(scheme.filter)) {
			if (definition.type !== 'select' && definition.type !== 'rangeSelect') continue;

			const option = definition.options.find((item) => Object.is(item.value, value));
			if (option) return option.label;
		}

		return value == null ? '' : String(value);
	};

	const selectedLabels = (value: unknown) =>
		(Array.isArray(value) ? value : [value]).filter((item) => item != null).map(optionLabel);

	const filterScheme = $derived.by<FilterScheme>(
		() =>
			({
				filter: Object.fromEntries(
					Object.entries(scheme.filter).map(([key, definition]) => {
						const common = {
							name: definition.name,
							icon: definition.icon,
							default: definition.default
						};

						switch (definition.type) {
							case 'string':
								return [
									key,
									{
										...common,
										type: 'text',
										options: { label: definition.label }
									}
								];
							case 'select':
								return [
									key,
									{
										...common,
										type: 'select',
										options: {
											options: definition.options,
											multiple: definition.multiple,
											optionIconSnippet: definition.optionIconSnippet
										}
									}
								];
							case 'range':
								return [
									key,
									{
										...common,
										type: 'range',
										options: {
											min: definition.min,
											max: definition.max,
											minLabel: definition.minLabel,
											maxLabel: definition.maxLabel
										}
									}
								];
							case 'rangeSelect':
								return [
									key,
									{
										...common,
										type: 'rangeSelect',
										options: {
											options: definition.options,
											optionIconSnippet: definition.optionIconSnippet
										}
									}
								];
						}
					})
				),
				sort: scheme.sort.map(({ objective, ...definition }) => ({
					...definition,
					id: objective
				}))
			}) as unknown as FilterScheme
	);

	const pageSizeValue = $derived(
		Array.isArray(scheme.pageSize)
			? (data.pageSize ??
					('defaultPageSize' in scheme ? scheme.defaultPageSize : undefined) ??
					scheme.pageSize[0] ??
					0)
			: (data.pageSize ?? 0)
	);
</script>

{#snippet selectPopover(control: FilterControlProp<unknown, unknown>)}
	{@const value = control.value}
	{@const setValue = control.setValue}
	{@const options = control.options}
	{@const config = selectOptions(options)}
	{@const multiple = config.multiple ?? Array.isArray(value)}
	<ComboboxComponent
		items={config.options}
		value={value as string | number | (string | number)[] | null}
		{multiple}
		iconTemplate={config.optionIconSnippet}
		onSelectedChange={({ next }: { next: ComboboxSelection<string | number> }) => {
			const selected = Array.isArray(next)
				? next.map((option) => option.value)
				: next && typeof next === 'object'
					? next.value
					: null;
			setValue(selected);
			return next;
		}}
	/>
{/snippet}

{#snippet selectValue(value: unknown)}
	{selectedLabels(value).join(', ')}
{/snippet}

{#snippet rangePopover(control: FilterControlProp<unknown, unknown>)}
	{@const value = control.value}
	{@const setValue = control.setValue}
	{@const options = control.options}
	{@const config = options as { min?: number; max?: number; minLabel?: string; maxLabel?: string }}
	{@const range = Array.isArray(value) ? value : [undefined, undefined]}
	<div class="compat-range">
		<label>
			<span>{config.minLabel ?? ''}</span>
			<input
				type="number"
				min={config.min}
				max={config.max}
				value={range[0] ?? ''}
				oninput={(event) =>
					setValue(updateRange(value, 0, (event.currentTarget as HTMLInputElement).value))}
			/>
		</label>
		<label>
			<span>{config.maxLabel ?? ''}</span>
			<input
				type="number"
				min={config.min}
				max={config.max}
				value={range[1] ?? ''}
				oninput={(event) =>
					setValue(updateRange(value, 1, (event.currentTarget as HTMLInputElement).value))}
			/>
		</label>
	</div>
{/snippet}

{#snippet rangeValue(value: unknown)}
	{@const range = Array.isArray(value) ? value : []}
	{range[0] ?? ''}{range[0] !== range[1] ? ` - ${range[1] ?? ''}` : ''}
{/snippet}

{#snippet rangeSelectPopover(control: FilterControlProp<unknown, unknown>)}
	{@const value = control.value}
	{@const setValue = control.setValue}
	{@const options = control.options}
	{@const config = selectOptions(options)}
	{@const range = Array.isArray(value) ? value : [undefined, undefined]}
	<div class="compat-range">
		{#each [0, 1] as index (index)}
			<ComboboxComponent
				items={config.options}
				value={range[index] as string | number | null}
				iconTemplate={config.optionIconSnippet}
				onSelectedChange={({ next }: { next: ComboboxSelection<string | number> }) => {
					const nextRange = Array.isArray(value) ? [...value] : [undefined, undefined];
					nextRange[index] = !Array.isArray(next) && next ? next.value : null;
					setValue(nextRange);
					return next;
				}}
			/>
		{/each}
	</div>
{/snippet}

{#snippet rangeSelectValue(value: unknown)}
	{@const range = Array.isArray(value) ? value : []}
	{@const min = optionLabel(range[0])}
	{@const max = optionLabel(range[1])}
	{min}{min !== max ? ` - ${max}` : ''}
{/snippet}

<div class="search-options-bar">
	{#if Array.isArray(scheme.pageSize) && scheme.pageSize.length > 0}
		<PopoverSelect.Root
			value={String(pageSizeValue)}
			selectedValue={String(data.pageSize ?? '')}
			hasValue
			onSelect={(value) => {
				data.pageSize = Number(value);
			}}
		>
			{#snippet trigger({ props })}
				<Item icon="gg:view" {...props}>
					{#snippet name()}
						<Localized id="lib-search-page-size" />
					{/snippet}
					{#snippet value()}
						<Localized id="lib-search-page-size-value" args={{ count: pageSizeValue }} />
					{/snippet}
				</Item>
			{/snippet}
			{#each scheme.pageSize as size (size)}
				<PopoverSelect.Item name={String(size)} value={String(size)} />
			{/each}
		</PopoverSelect.Root>
		{#if scheme.sort.length > 0}
			<div class="divider"></div>
		{/if}
	{/if}

	<BetaSearchOptionsBar
		{filterScheme}
		bind:filters={data.filter}
		bind:sort={data.sort}
		extraTypes={{
			select: { popover: selectPopover, value: selectValue },
			range: { popover: rangePopover, value: rangeValue },
			rangeSelect: { popover: rangeSelectPopover, value: rangeSelectValue }
		}}
	/>
</div>

<style>
	.search-options-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
	}

	.divider {
		width: 0;
		height: 18px;
		opacity: 0.2;
		border: 1px solid #ffffff;
	}

	.compat-range {
		display: grid;
		gap: 12px;
	}

	.compat-range label {
		display: grid;
		gap: 4px;
	}

	.compat-range input {
		min-height: 38px;
		padding: 8px;
		color: inherit;
		background: transparent;
		border: 1px solid rgb(255 255 255 / 20%);
		border-radius: 8px;
	}
</style>
