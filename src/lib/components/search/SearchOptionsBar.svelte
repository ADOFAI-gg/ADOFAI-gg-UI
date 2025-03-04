<script lang="ts">
	import type { SearchOptionScheme, SearchOptionsData } from '$lib/types'
	import { translateKey, Translation } from '$lib/index'
	import Popover from '../Popover.svelte'
	import AddFilterButton from './AddFilterButton.svelte'
	import PopoverSelect from './PopoverSelect.svelte'
	import SearchOptionChip from './SearchOptionChip.svelte'
	import PopoverContentPanel from '../PopoverContentPanel.svelte'
	import FilterEditPanel from './FilterEditPanel.svelte'
	import { circOut } from 'svelte/easing'
	import { flip } from 'svelte/animate'
	import { tick } from 'svelte'
	import { fade, fly, slide } from 'svelte/transition'

	interface Props {
		scheme: SearchOptionScheme
		data: SearchOptionsData
	}

	let { scheme, data = $bindable() }: Props = $props()
	let defaultOpen = $state<string | null>(null)

	const genKey = (key: string) => `${key}-${Date.now()}`

	const addFilter = (key: string) => {
		const id = genKey(key)
		const newData = { ...data }
		newData.filter = [...data.filter]
		newData.filter.push({
			key,
			value: scheme.filter[key].default,
			id
		})

		data = newData

		defaultOpen = id
	}

	$effect(() => {
		for (const f of data.filter) {
			if (!f.id) f.id = genKey(f.key)
		}
	})

	const renderRange = (value: unknown): string => {
		const [min, max] = value as [number, number]
		if (min === max) return `${min}`
		return `${min} - ${max}`
	}
</script>

<div class="search-options-bar">
	{#if scheme.pageSize}
		<Popover>
			{#snippet trigger(el)}
				<SearchOptionChip meltElement={el} icon="view" objectiveKey="ui-search:page-size" hasValue>
					<Translation key="ui-search:page-size-value" params={{ count: data.pageSize || 0 }} />
				</SearchOptionChip>
			{/snippet}

			{#snippet children({ close })}
				<PopoverSelect
					items={scheme.pageSize.map((x) => ({
						label: 'ui-search:page-size-value',
						labelParams: { count: x },
						value: x
					}))}
					value={data.pageSize}
					onSelect={(v) => {
						data.pageSize = v
						close()
					}}
				/>
			{/snippet}
		</Popover>
	{/if}

	{#if scheme.pageSize}
		<div class="divider"></div>
	{/if}

	{#each data.filter as filter, i (filter.id)}
		{@const filterScheme = scheme.filter[filter.key]}
		<div animate:flip={{ duration: 400 }}>
			<Popover defaultOpen={defaultOpen === filter.id}>
				{#snippet trigger(el)}
					<div in:fade={{ duration: 400 }} out:fade={{ duration: 200 }}>
						<SearchOptionChip
							icon={filterScheme.icon}
							objectiveKey={filterScheme.name}
							meltElement={el}
							hasValue={!!filter.value}
						>
							{#if filterScheme.type === 'string'}
								{filter.value}
							{:else if filterScheme.type === 'range'}
								{renderRange(filter.value)}
							{:else if filterScheme.type === 'select'}
								{#if filterScheme.multiple}
									{@const item = filterScheme.options.filter((x) =>
										(filter.value as (string | number)[])?.includes(x.value)
									)}

									{#if item.length === 1}
										{item[0].label}
									{:else if item.length > 1}
										<Translation
											key="ui-search:multi-select-summary"
											params={{
												first: item[0].label,
												rest: item.length - 1
											}}
											htmlReplacer={(x) => {
												return x.replace(
													/\[rest\](.*)\[\/rest\]/,
													'<span style="opacity: 0.4;">$1</span>'
												)
											}}
										/>
									{/if}
								{:else}
									{filterScheme.options.find((x) => x.value === filter.value)?.label}
								{/if}
							{:else if filterScheme.type === 'rangeSelect'}
								{@const v = filter.value as string[]}
								{@const min = filterScheme.options.find((x) => x.value === v[0])?.label}
								{@const max = filterScheme.options.find((x) => x.value === v[1])?.label}

								{#if min === max}
									{min}
								{:else}
									<Translation key="ui-common:range" params={{ min: min || '', max: max || '' }} />
								{/if}
							{/if}
						</SearchOptionChip>
					</div>
				{/snippet}

				{#snippet children({ close })}
					<PopoverContentPanel>
						<FilterEditPanel
							onRemove={() => {
								close()

								tick().then(() => {
									data.filter.splice(i, 1)
								})
							}}
							{close}
							scheme={filterScheme}
							value={filter.value}
							onSave={(value) => {
								filter.value = value
								close()
							}}
						/>
					</PopoverContentPanel>
				{/snippet}
			</Popover>
		</div>
	{/each}

	<Popover lockOnClose>
		{#snippet trigger(el)}
			<AddFilterButton meltElement={el} />
		{/snippet}

		{#snippet children({ close })}
			<PopoverSelect
				onSelect={(v) => {
					close()
					tick().then(() => {
						addFilter(v)
					})
				}}
				placeholder={(label, key, lang) =>
					translateKey(lang, 'ui-search:add-filter-placeholder', { label: label || '...' })}
				items={Object.entries(scheme.filter).map(([k, v]) => ({
					icon: v.icon,
					label: v.name,
					value: k
				}))}
			/>
		{/snippet}
	</Popover>
</div>

<style lang="scss">
	.search-options-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		align-items: center;
	}

	.divider {
		width: 0px;
		height: 18px;

		opacity: 0.2;
		border: 1px solid #ffffff;
	}
</style>
