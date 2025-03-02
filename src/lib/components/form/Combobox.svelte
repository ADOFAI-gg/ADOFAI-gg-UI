<script lang="ts">
	import { PopoverContentPanel, type SelectOption } from '$lib/index'
	import { createCombobox, createSync, melt, type CreateComboboxProps } from '@melt-ui/svelte'
	import { fly } from 'svelte/transition'
	import Icon from '../Icon.svelte'
	import Translation from '$lib/utils/Translation.svelte'
	import type { Snippet } from 'svelte'
	import type { ListboxOption } from 'node_modules/@melt-ui/svelte/dist/builders/listbox/types'

	type T = $$Generic

	type Item = SelectOption<T>

	type Props = Omit<CreateComboboxProps<string>, 'open' | 'selected'> & {
		items: Item[]
		open?: boolean
		value?: string | null
		placeholder?: string
		subtitleTemplate?: Snippet<[Item]>
		iconTemplate?: Snippet<[Item]>
		labelTemplate?: (item: Item) => string
		clearable?: boolean
	}

	let {
		placeholder,
		open = $bindable(false),
		value = $bindable(),
		items,
		labelTemplate = (v) => v.label,
		subtitleTemplate,
		iconTemplate,
		clearable,
		...props
	}: Props = $props()

	const {
		elements: { input, menu, option },
		states: { touchedInput, highlighted, ...states }
	} = createCombobox({
		forceVisible: true,
		...props,
		positioning: {
			sameWidth: false,
			placement: 'bottom-start',
			fitViewport: true
		}
	})

	let triggerWidth = $state(0)

	const { inputValue } = states

	const sync = createSync(states)

	let currentItem = $derived(items.find((x) => x.value === value))

	$effect(() => sync.open(open, (v) => (open = v)))
	$effect(() => {
		sync.selected(
			currentItem ? { label: labelTemplate(currentItem), value: currentItem.value } : undefined,
			(v) => (value = v?.value)
		)
	})

	const filtered = $derived.by(() => {
		if (!$touchedInput) return items
		const q = $inputValue.toLowerCase()
		return items.filter((x) => x.label.toLowerCase().includes(q))
	})

	$effect(() => {
		if (!open) {
			$inputValue = currentItem?.label ?? ''
		}
	})
</script>

<div class="combobox-root" bind:offsetWidth={triggerWidth}>
	{#if currentItem?.icon}
		<div class="select-icon">
			{#if iconTemplate}
				{@render iconTemplate(currentItem)}
			{:else if currentItem.icon}
				<Icon alt="icon" size={18} icon={currentItem.icon} />
			{/if}
		</div>
	{/if}

	<input class="input" {placeholder} use:melt={$input} />
	<div class="actions-area">
		{#if clearable && currentItem}
			<button
				class="clear-button"
				type="button"
				onclick={() => {
					value = null
				}}
			>
				<Icon alt="clear" icon="close" size={16} />
			</button>
		{/if}

		<div class="expand-icon">
			<Icon alt="expand" icon="showMore" size={18} />
		</div>
	</div>
</div>

{#if open}
	<div
		class="menu"
		style="--trigger-width: {triggerWidth}px;"
		use:melt={$menu}
		transition:fly={{ duration: 150, y: 5 }}
	>
		<PopoverContentPanel>
			<div class="items">
				{#each filtered as item, index (index)}
					{@const label = labelTemplate?.(item) ?? item.label}
					<div class="item" use:melt={$option(item)}>
						<div class="item-icon">
							{#if iconTemplate}
								{@render iconTemplate(item)}
							{:else if item.icon}
								<Icon alt="icon" size={18} icon={item.icon} />
							{/if}
						</div>
						<div class="item-text-area">
							<div class="item-title">
								{label}
							</div>
							{#if item.subtitle || subtitleTemplate}
								<div class="item-subtitle">
									{#if subtitleTemplate}
										{@render subtitleTemplate(item)}
									{:else}
										{item.subtitle}
									{/if}
								</div>
							{/if}
						</div>
					</div>
				{:else}
					<div class="no-options">
						<Translation key="ui-common:no-options" />
					</div>
				{/each}
			</div>
		</PopoverContentPanel>
	</div>
{/if}

<style lang="scss">
	@use '../../stylesheets/system/colors' as colors;

	.combobox-root {
		position: relative;
		height: 38px;
		display: flex;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 8px;
		align-items: center;
		gap: 8px;
	}

	.input {
		background: transparent;
		flex-grow: 1;

		outline: none;
		font-size: 16px;
		position: absolute;
		width: 100%;
		height: 100%;
		inset: 0;
	}

	.no-options {
		text-align: center;
		font-size: 16;
		color: rgba(255, 255, 255, 0.6);
	}

	.items {
		display: flex;
		flex-direction: column;
		user-select: none;
	}

	.item {
		--bg-opacity: 0;

		display: flex;
		padding: 10px 16px;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		border-radius: 8px;

		background-color: rgba(colors.$blue, var(--bg-opacity));
		transition: background-color ease 0.2s;

		&[data-selected] {
			--bg-opacity: 0.1;
		}

		&[data-highlighted] {
			--bg-opacity: 0.15;
		}

		&:active {
			--bg-opacity: 0.2;
		}

		&-title {
			font-size: 16px;
		}

		&-subtitle {
			font-size: 14px;
			color: rgba(255, 255, 255, 0.4);
		}

		&-icon {
			width: 18px;
			height: 18px;
		}

		&-text-area {
			display: flex;
			flex-direction: column;
		}
	}

	.menu {
		max-width: var(--trigger-width) !important;
		width: 100%;
	}

	.select-icon {
		width: 18px;
		height: 18px;
		user-select: none;
		pointer-events: none;
		margin-left: 16px;
	}

	.input {
		padding-left: 16px;
		padding-right: 16px;
	}

	.select-icon + .input {
		padding-left: 42px;
	}

	.actions-area {
		position: absolute;
		right: 16px;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.clear-button {
		width: 18px;
		height: 18px;
		display: flex;
		justify-content: center;
		align-items: center;

		--content-opacity: 0.6;
	}

	.expand-icon {
		width: 18px;
		height: 18px;
	}
</style>
