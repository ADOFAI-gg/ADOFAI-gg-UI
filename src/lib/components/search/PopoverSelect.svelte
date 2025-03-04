<script lang="ts">
	import { getGlobalContext, type SelectOption } from '$lib/index'
	import Translation from '$lib/utils/Translation.svelte'
	import { createSync, INTERACTION_KEYS, melt, type AnyMeltElement } from '@melt-ui/svelte'
	import { createListbox2 } from '$lib/builders/listbox2'
	import { tick, type Snippet } from 'svelte'
	import { fly } from 'svelte/transition'
	import PopoverContentPanel from '../PopoverContentPanel.svelte'
	import ComboboxItem from './ComboboxItem.svelte'
	import { getElementById, kbd } from '@melt-ui/svelte/internal/helpers'
	import type { CreateListboxProps } from 'node_modules/@melt-ui/svelte/dist/builders/listbox/types'

	type T = $$Generic
	type Value = $$Generic

	type Item = SelectOption<Value, T>

	type Props = Omit<CreateListboxProps<Value>, 'open' | 'selected' | 'forceVisible'> & {
		items: Item[]
		placeholder?: (label: string | null, value: string | null, lang: string) => string
		value?: Value
		inputValue?: boolean
		customFilter?: boolean
		subtitleTemplate?: Snippet<[Item]>
		iconTemplate?: Snippet<[Item]>
		select?: boolean

		open?: boolean

		trigger: Snippet<[AnyMeltElement]>
	}

	let {
		items,
		value,
		iconTemplate,
		subtitleTemplate,
		open = $bindable(false),
		placeholder = (v) => v || '',
		select,
		trigger: triggerSnippet,
		...rest
	}: Props = $props()

	const {
		elements: { option, menu, trigger, input },
		states: { highlighted, ...states }
	} = createListbox2({
		forceVisible: true,
		...rest
	})

	const sync = createSync(states)

	$effect(() => {
		sync.open(open, (v) => (open = v))
	})

	let currentItem = $derived.by(() => {
		if (!value) return undefined
		return items.find((x) => x.value === value)
	})

	$effect(() => {
		sync.selected(currentItem, (v) => (value = v?.value))
	})

	const { language: lang } = getGlobalContext()

	// let selected = $state<(typeof translatedItems)[number] | null>()

	// $effect(() => {
	// 	if (!translatedItems.find((x) => x.value === selected?.value)) {
	// 		selected =
	// 			(value && translatedItems.find((x) => x.value === value)) || translatedItems[0] || null
	// 	}
	// })

	let convertedPlaceholder = $derived(
		placeholder($highlighted?.label || null, $highlighted?.value?.toString() || null, $lang)
	)

	let inputContent = $state('')

	const normalize = (v: string) => v.normalize().toLowerCase()

	let filteredItems = $derived.by(() => {
		return items.filter((x) => normalize(x.label).includes(normalize(inputContent)))
	})
</script>

{@render triggerSnippet(trigger)}

{#if open}
	<div
		class="select-root"
		transition:fly={{ y: 12, duration: 400 }}
		class:contains-value={value !== undefined}
		use:melt={$menu}
	>
		<PopoverContentPanel>
			<input
				placeholder={convertedPlaceholder}
				type="text"
				class="search-input"
				use:melt={$input}
				bind:value={inputContent}
			/>

			<div class="list">
				{#each filteredItems as item (item.value)}
					<ComboboxItem
						{select}
						{iconTemplate}
						{subtitleTemplate}
						meltElement={option}
						option={item}
					/>
				{:else}
					<div class="empty-sign">
						<Translation key="ui-search:options-empty" />
					</div>
				{/each}
			</div>
		</PopoverContentPanel>
	</div>
{/if}

<style lang="scss">
	@use '../../stylesheets/system/colors' as *;

	.search-input {
		&:focus {
			outline: none;
		}

		& {
			width: 100%;
			background-color: transparent;
			height: 38px;
			font-size: 16px;
			padding: 8px 16px;
			line-height: 140%;

			border: 1px solid rgba(255, 255, 255, 0.2);
			border-radius: 8px;
		}

		&::placeholder {
			font-size: 16px;
			line-height: 140%;
			color: rgba(255, 255, 255, 0.8);
		}
	}

	.select-root {
		> :global(.popover-content-panel) {
			max-width: 312px;
			width: 100vw;
		}
	}
</style>
