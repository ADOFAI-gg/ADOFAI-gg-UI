<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ComboboxItem } from '../form/combobox.svelte';

	type SearchFilterOption = ComboboxItem;
	type SearchFilterOptionIcon = Snippet<[SearchFilterOption]>;

	/** The legacy search filter scheme kept local while the beta API is migrated. */
	type SearchFilterScheme = (
		| {
				type: 'string';
				label: string;
		  }
		| {
				type: 'select';
				label: string;
				options: SearchFilterOption[];
				multiple?: boolean;
				optionIconSnippet?: SearchFilterOptionIcon;
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
				options: SearchFilterOption[];
				optionIconSnippet?: SearchFilterOptionIcon;
		  }
	) & {};

	export type FilterEditPanelProps = {
		scheme: SearchFilterScheme;
		value: unknown;
		close: () => void;
		onRemove: () => void;
		onSave: (value: unknown) => void;
	};
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { Button, FormField, FormHint, InputControl } from '$lib/index.js';
	import Combobox from '../form/combobox.svelte';

	let { scheme, close, onRemove, onSave, value: initialValue }: FilterEditPanelProps = $props();

	const getInitialValue = () => {
		const snapshot = $state.snapshot(initialValue);

		if (scheme.type === 'range' || scheme.type === 'rangeSelect') {
			const range = Array.isArray(snapshot) ? snapshot : [];
			return [range[0], range[1]];
		}

		return Array.isArray(snapshot) ? [...snapshot] : snapshot;
	};

	// This state must remain writable because the form controls mutate it while editing.
	// eslint-disable-next-line svelte/prefer-writable-derived
	let value = $state<unknown>(getInitialValue());

	$effect(() => {
		value = getInitialValue();
	});

	const rangeMinValueError = (v: unknown): number | undefined => {
		if (scheme.type !== 'range') return undefined;

		const [min, maxValue] = (Array.isArray(v) ? v : []) as [number, number];
		const max = Math.min(maxValue, scheme.max ?? Number.MAX_VALUE);

		return min > max ? max : undefined;
	};

	const rangeMaxValueError = (v: unknown): number | undefined => {
		if (scheme.type !== 'range') return undefined;

		const [minValue, max] = (Array.isArray(v) ? v : []) as [number, number];
		const min = Math.max(minValue, scheme.min ?? Number.MIN_VALUE);

		return min > max ? min : undefined;
	};

	const optionIndex = (optionValue: unknown) => {
		if (scheme.type !== 'rangeSelect') return Number.NaN;
		return scheme.options.findIndex((option) => Object.is(option.value, optionValue));
	};

	const selectionValue = (selection: unknown): string | number | undefined => {
		if (!selection || Array.isArray(selection)) return undefined;
		const value = (selection as SearchFilterOption).value;
		return typeof value === 'string' || typeof value === 'number' ? value : undefined;
	};
</script>

<form
	class="gap-4 grid w-[280px]"
	onsubmit={(event) => {
		event.preventDefault();

		if (
			scheme.type === 'range' &&
			(rangeMinValueError(value) !== undefined || rangeMaxValueError(value) !== undefined)
		) {
			return;
		}

		onSave(value);
	}}
>
	{#if scheme.type === 'string'}
		<FormField label={scheme.label}>
			<InputControl bind:value={value as string} />
		</FormField>
	{:else if scheme.type === 'select'}
		<FormField label={scheme.label}>
			<Combobox
				bind:value
				items={scheme.options}
				multiple={scheme.multiple}
				iconTemplate={scheme.optionIconSnippet}
			/>
		</FormField>
	{:else if scheme.type === 'range'}
		{@const range = value as [number, number]}
		<div class="gap-4 grid">
			<FormField horizontal label={scheme.minLabel}>
				<InputControl type="number" min={scheme.min} max={scheme.max} bind:value={range[0]} />
				{#snippet hints()}
					{@const error = rangeMinValueError(value)}
					{#if error !== undefined}
						<FormHint type="error">
							<Localized id="lib-search-error-max-value" args={{ value: error }} />
						</FormHint>
					{/if}
				{/snippet}
			</FormField>
			<FormField horizontal label={scheme.maxLabel}>
				<InputControl type="number" min={scheme.min} max={scheme.max} bind:value={range[1]} />
				{#snippet hints()}
					{@const error = rangeMaxValueError(value)}
					{#if error !== undefined}
						<FormHint type="error">
							<Localized id="lib-search-error-min-value" args={{ value: error }} />
						</FormHint>
					{/if}
				{/snippet}
			</FormField>
		</div>
	{:else if scheme.type === 'rangeSelect'}
		{@const range = value as [string | number | null, string | number | null]}
		<div class="gap-4 grid">
			<FormField label={scheme.minLabel}>
				<Combobox
					multiple={false}
					clearable
					bind:value={range[0]}
					items={scheme.options}
					iconTemplate={scheme.optionIconSnippet}
					onSelectedChange={({ next }) => {
						const nextValue = selectionValue(next);
						if (nextValue !== undefined) {
							const other = optionIndex(range[1]);
							if (!Number.isNaN(other) && optionIndex(nextValue) > other) {
								range[1] = nextValue;
							}
						}

						return next;
					}}
				/>
			</FormField>
			<FormField label={scheme.maxLabel}>
				<Combobox
					multiple={false}
					clearable
					bind:value={range[1]}
					items={scheme.options}
					iconTemplate={scheme.optionIconSnippet}
					onSelectedChange={({ next }) => {
						const nextValue = selectionValue(next);
						if (nextValue !== undefined) {
							const other = optionIndex(range[0]);
							if (!Number.isNaN(other) && optionIndex(nextValue) < other) {
								range[0] = nextValue;
							}
						}

						return next;
					}}
				/>
			</FormField>
		</div>
	{/if}

	<div class="gap-2 flex justify-end">
		<Button size="md" variant="ghostLight" type="button" onclick={close}>
			<Localized id="lib-search-cancel" />
		</Button>
		<Button size="md" variant="ghostDanger" type="button" onclick={onRemove}>
			<Localized id="lib-search-remove-filter" />
		</Button>
		<Button size="md" type="submit">
			<Localized id="lib-search-apply" />
		</Button>
	</div>
</form>
