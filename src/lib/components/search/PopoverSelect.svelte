<script lang="ts">
	import Translation from '$lib/utils/Translation.svelte'
	import Icon from '../Icon.svelte'
	import PopoverContentPanel from '../PopoverContentPanel.svelte'
	import { getGlobalContext, translateKey, type TranslationKey } from '$lib/index'
	import type { FluentVariable } from '@fluent/bundle'

	type T = $$Generic

	interface Item {
		label: TranslationKey
		labelParams?: Record<string, FluentVariable>
		icon?: string
		value: T
	}

	interface Props {
		items: Item[]
		placeholder?: (label: string | null, value: string | null, lang: string) => string
		value?: T
		onSelect?: (value: T) => void
	}

	const { items, value, onSelect, placeholder = (v) => v || '' }: Props = $props()

	const ctx = getGlobalContext()
	const lang = ctx.language

	let translatedItems = $derived.by(() => {
		return items.map((x) => ({
			...x,
			translatedLabel: translateKey($lang, x.label, x.labelParams || {})
		}))
	})

	let selected = $state<(typeof translatedItems)[number] | null>()

	$effect(() => {
		if (!translatedItems.find((x) => x.value === selected?.value)) {
			selected =
				(value && translatedItems.find((x) => x.value === value)) || translatedItems[0] || null
		}
	})

	let convertedPlaceholder = $derived(
		placeholder(selected?.translatedLabel || null, selected?.value?.toString() || null, $lang)
	)

	let search = $state('')

	const normalize = (v: string) => v.normalize().toLowerCase()

	let filteredItems = $derived(
		translatedItems.filter((x) => normalize(x.translatedLabel).includes(normalize(search)))
	)
</script>

<div class="select-root" class:contains-value={value !== undefined}>
	<PopoverContentPanel>
		<input
			type="text"
			class="search-input"
			placeholder={convertedPlaceholder}
			bind:value={search}
			onkeydown={(e) => {
				if (e.key === 'ArrowDown') {
					e.preventDefault()

					const idx = translatedItems.findIndex((x) => x.value === selected?.value)
					if (idx === -1) return

					if (translatedItems[idx + 1]) {
						selected = translatedItems[idx + 1]
					}
				} else if (e.key === 'ArrowUp') {
					e.preventDefault()

					const idx = translatedItems.findIndex((x) => x.value === selected?.value)
					if (idx === -1) return

					if (translatedItems[idx - 1]) {
						selected = translatedItems[idx - 1]
					}
				} else if (e.key === 'Enter') {
					e.preventDefault()
					if (!filteredItems.length) return
					if (!selected) return
					onSelect?.(selected.value)
				}
			}}
		/>
		<div class="list">
			{#each filteredItems as item (item.value)}
				<button
					class="item"
					class:focus={item.value === selected?.value}
					class:selected={value === item.value}
					tabindex="-1"
					onmouseover={() => {
						selected = item
					}}
					onfocus={(e) => {
						e.preventDefault()
					}}
					onclick={(e) => {
						e.preventDefault()
						onSelect?.(item.value)
					}}
				>
					<div class="icon">
						{#if item.icon}
							<Icon size={18} alt="icon" icon={item.icon} />
						{/if}
					</div>

					<div class="label">
						{item.translatedLabel}
					</div>
				</button>
			{:else}
				<div class="empty-sign">
					<Translation key="ui-search:options-empty" />
				</div>
			{/each}
		</div>
	</PopoverContentPanel>
</div>

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
		max-width: 240px;

		> :global(.popover-content-panel) {
			max-width: 240px;
			width: 100vw;
		}
	}

	.icon {
		width: 18px;
		height: 18px;
	}

	.item {
		display: flex;
		gap: 8px;
		padding: 0 16px;
		height: 42px;
		align-items: center;
		border-radius: 8px;
		--item-bg: 255, 255, 255;
		background-color: rgba(var(--item-bg), 0);
		width: 100%;

		transition: background-color ease 0.2s;
		cursor: pointer;
		user-select: none;
	}

	:not(.contains-value) .item {
		&:hover,
		&.focus {
			background-color: rgba(var(--item-bg), 0.05);
		}

		&:active {
			background-color: rgba(var(--item-bg), 0.1);
		}
	}

	.contains-value {
		.item {
			--item-bg: 59, 132, 241;

			&.focus {
				background-color: rgba(var(--item-bg), 0.15);
			}

			&.selected {
				background-color: rgba(var(--item-bg), 0.1);
			}

			&.selected.focus {
				background-color: rgba(var(--item-bg), 0.2);
			}
		}
	}
</style>
