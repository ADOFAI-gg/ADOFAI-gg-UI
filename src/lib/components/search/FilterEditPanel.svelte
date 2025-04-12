<script lang="ts">
	import type { SearchFilterScheme } from '$lib/types'
	import Translation from '$lib/utils/Translation.svelte'
	import Button from '../Button.svelte'
	import FormField from '../form/FormField.svelte'
	import InputControl from '../form/InputControl.svelte'
	import { translateKey } from '$lib/utils/translation'
	import { getGlobalContext } from '$lib/system/context'
	import { FormHint } from '$lib/index'
	import Combobox from '../form/Combobox.svelte'

	interface Props {
		scheme: SearchFilterScheme
		value: unknown
		close: () => void
		onRemove: () => void
		onSave: (value: unknown) => void
	}

	const { scheme, close, onRemove, onSave, value: initialValue }: Props = $props()

	let selectOptionIndexes: Record<string, number> = $derived.by(() => {
		if (scheme.type !== 'rangeSelect') return {}

		return Object.fromEntries(scheme.options.map((x, i) => [x.value, i]))
	})

	const getInitialValue = () => {
		if (scheme.type === 'range' || scheme.type === 'rangeSelect') {
			const snapshot = $state.snapshot(initialValue)
			return [snapshot[0], snapshot[1]]
		} else return $state.snapshot(initialValue)
	}

	let value: any = $state(getInitialValue())

	$effect(() => {
		value = getInitialValue()
	})

	const { language } = getGlobalContext()

	const rangeMinValueError = (v: unknown): string | undefined => {
		if (scheme.type === 'range') {
			const [min, maxVal] = v as [number, number]
			const max = Math.min(maxVal, scheme.max ?? Number.MAX_VALUE)

			if (min > max) return translateKey($language, 'ui-search:error-max-value', { value: max })

			return undefined
		}

		throw new Error('invalid scheme')
	}

	const rangeMaxValueError = (v: unknown): string | undefined => {
		if (scheme.type === 'range') {
			const [minVal, max] = v as [number, number]
			const min = Math.max(minVal, scheme.min ?? Number.MIN_VALUE)

			if (min > max) return translateKey($language, 'ui-search:error-min-value', { value: min })

			return undefined
		}

		throw new Error('invalid scheme')
	}
</script>

<form
	class="filter-edit-panel"
	onsubmit={(e) => {
		e.preventDefault()

		if (scheme.type === 'range') {
			if (rangeMinValueError(value) || rangeMaxValueError(value)) return
		}

		onSave(value)
	}}
>
	{#if scheme.type === 'string'}
		<FormField label={scheme.label}>
			<InputControl bind:value={value as string} />
		</FormField>
	{:else if scheme.type === 'select'}
		<FormField label={scheme.label}>
			<Combobox
				bind:value={value as string}
				items={scheme.options}
				multiple={scheme.multiple}
				iconTemplate={scheme.optionIconSnippet}
			/>
		</FormField>
	{:else if scheme.type === 'range'}
		{@const v = value as [number, number]}
		<div class="form">
			<FormField horizontal label={scheme.minLabel}>
				<InputControl type="number" min={scheme.min} max={scheme.max} bind:value={v[0]} />
				{#snippet hints()}
					{@const err = rangeMinValueError(value)}
					{#if err}
						<FormHint type="error">{err}</FormHint>
					{/if}
				{/snippet}
			</FormField>
			<FormField horizontal label={scheme.maxLabel}>
				<InputControl type="number" min={scheme.min} max={scheme.max} bind:value={v[1]} />
				{#snippet hints()}
					{@const err = rangeMaxValueError(value)}
					{#if err}
						<FormHint type="error">{err}</FormHint>
					{/if}
				{/snippet}
			</FormField>
		</div>
	{:else if scheme.type === 'rangeSelect'}
		{@const v = value as [string, string]}
		<div class="form">
			<FormField label={scheme.minLabel}>
				<Combobox
					multiple={false}
					onSelectedChange={({ next }) => {
						if (next?.value) {
							const other = selectOptionIndexes[value[1]]

							if (isNaN(other)) return next

							const current = selectOptionIndexes[next.value]

							if (current > other) {
								value[1] = next.value
							}
						}
						return next
					}}
					clearable
					bind:value={v[0] as string}
					items={scheme.options}
					iconTemplate={scheme.optionIconSnippet}
				/>
			</FormField>
			<FormField label={scheme.maxLabel}>
				<Combobox
					multiple={false}
					iconTemplate={scheme.optionIconSnippet}
					onSelectedChange={({ next }) => {
						if (next?.value) {
							const other = selectOptionIndexes[value[0]]

							if (isNaN(other)) return next

							const current = selectOptionIndexes[next.value]

							if (current < other) {
								value[0] = next.value
							}
						}
						return next
					}}
					clearable
					bind:value={v[1] as string}
					items={scheme.options}
				/>
				<!-- <InputControl type="number" min={scheme.min} max={scheme.max} bind:value={v[1]} /> -->
			</FormField>
		</div>
	{/if}

	<div class="actions">
		<Button size="md" type="button" variant="ghost-light" onclick={close}>
			<Translation key="ui-search:cancel" />
		</Button>
		<Button size="md" type="button" variant="ghost-danger" onclick={onRemove}>
			<Translation key="ui-search:remove-filter" />
		</Button>
		<Button size="md" type="submit">
			<Translation key="ui-search:apply" />
		</Button>
	</div>
</form>

<style lang="scss">
	@use '../../stylesheets/system/colors' as *;

	.filter-edit-panel {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.actions {
		display: flex;
		gap: 8px;

		justify-content: flex-end;
	}

	.form {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
</style>
