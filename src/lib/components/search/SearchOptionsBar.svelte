<script lang="ts">
	import type { SearchOptionScheme, SearchOptionsData } from '$lib/types'
	import { getGlobalContext, translate, translateKey, Translation } from '$lib/index'
	import Popover from '../Popover.svelte'
	import AddFilterButton from './AddFilterButton.svelte'
	import PopoverSelect from './PopoverSelect.svelte'
	import SearchOptionChip from './SearchOptionChip.svelte'
	import PopoverContentPanel from '../PopoverContentPanel.svelte'
	import FilterEditPanel from './FilterEditPanel.svelte'

	interface Props {
		scheme: SearchOptionScheme
		data: SearchOptionsData
	}

	let { scheme, data = $bindable() }: Props = $props()

	const addFilter = (key: string) => {
		data.filter.push({
			key,
			value: scheme.filter[key].default
		})
	}

	const { language } = getGlobalContext()
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

	{#each data.filter as filter, i}
		{@const filterScheme = scheme.filter[filter.key]}
		<Popover>
			{#snippet trigger(el)}
				<SearchOptionChip
					icon={filterScheme.icon}
					objectiveKey={filterScheme.name}
					meltElement={el}
					hasValue={!!filter.value}
				>
					{#if filterScheme.type === 'string'}
						{filter.value}
					{/if}
				</SearchOptionChip>
			{/snippet}

			{#snippet children({ close })}
				<PopoverContentPanel>
					<FilterEditPanel
						onRemove={() => {
							data.filter.splice(i, 1)
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
	{/each}
	<Popover>
		{#snippet trigger(el)}
			<AddFilterButton meltElement={el} />
		{/snippet}

		{#snippet children({ close })}
			<PopoverSelect
				onSelect={(v) => {
					addFilter(v)
					close()
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
