<script lang="ts">
	import {
		getGlobalContext,
		Icon,
		LoadingSpinner,
		type SelectGroup,
		type SelectOption
	} from '$lib/index'
	import Translation from '$lib/utils/Translation.svelte'
	import { type AnyMeltElement } from '@melt-ui/svelte/internal/helpers'
	import { type Snippet } from 'svelte'
	import Popover from '../Popover.svelte'
	import PopoverContentPanel from '../PopoverContentPanel.svelte'
	import { Command } from 'cmdk-sv'

	type T = $$Generic
	type Value = string

	type Group = SelectGroup<Value, T>
	type Option = SelectOption<Value, T>

	type Props = {
		items: Group[]
		placeholder?: (label: string | null, value: string | null, lang: string) => string
		value?: Value
		inputValue?: string
		customFilter?: boolean
		subtitleTemplate?: Snippet<[Option]>
		iconTemplate?: Snippet<[Option]>
		select?: boolean
		onSelect?: (value: Value) => void
		loading?: boolean

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
		loading,
		customFilter,
		trigger: triggerSnippet,
		inputValue = $bindable(''),
		onSelect
	}: Props = $props()

	const { language: lang } = getGlobalContext()

	const normalize = (v: string) => v.normalize().toLowerCase()

	let filteredItems = $derived.by(() => {
		if (customFilter) return items
		return items
			.map(
				(x) =>
					({
						title: x.title,
						options: x.options.filter((y) => normalize(y.label).includes(normalize(inputValue)))
					}) as Group
			)
			.filter((x) => x.options.length > 0)
	})

	let currentItem = $derived(filteredItems.flatMap((x) => x.options).find((x) => x.value === value))

	let convertedPlaceholder = $derived(
		placeholder(currentItem?.label || null, currentItem?.value?.toString() || null, $lang)
	)
</script>

<Popover trigger={triggerSnippet} bind:open>
	<div class="select-root" class:contains-value={value !== undefined}>
		<PopoverContentPanel>
			<Command.Root bind:value shouldFilter={false}>
				<div class="input-root">
					<Command.Input bind:value={inputValue} placeholder={convertedPlaceholder} />

					{#if loading}
						<div class="loading-spinner">
							<LoadingSpinner size={18} />
						</div>
					{/if}
				</div>

				<div class="list">
					<Command.Empty>
						<div class="no-options">
							<Translation key="ui-common:no-options" />
						</div>
					</Command.Empty>

					{#each filteredItems as group, i (i)}
						{#snippet content()}
							{#each group.options as item, j (j)}
								<Command.Item
									onSelect={() => {
										open = false
										onSelect?.(item.value)
									}}
									class="{select ? 'select' : ''} item-{item.color || 'default'}"
									value={item.value}
								>
									<div class="item-icon">
										{#if iconTemplate}
											{@render iconTemplate(item)}
										{:else if item.icon}
											<Icon alt="icon" size={16} icon={item.icon} />
										{/if}
									</div>

									<div class="item-text-area">
										<div class="item-title">
											{item.label}
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
								</Command.Item>
							{/each}
						{/snippet}

						{#if group.title}
							<Command.Group heading={group.title}>
								{@render content()}
							</Command.Group>
						{:else}
							{@render content()}
						{/if}
					{/each}
				</div>
			</Command.Root>
		</PopoverContentPanel>
	</div>
</Popover>

<style lang="scss">
	@use '../../stylesheets/system/colors' as *;

	.select-root {
		> :global(.popover-content-panel) {
			max-width: 312px;
			width: 100vw;
		}

		:global([data-cmdk-root]) {
			display: flex;
			flex-direction: column;
		}

		.loading-spinner {
			pointer-events: none;
		}

		.input-root {
			&:focus {
				outline: none;
			}

			& {
				position: relative;
				width: 100%;
				background-color: transparent;
				height: 38px;
				font-size: 16px;
				padding: 8px 16px;
				line-height: 140%;
				display: flex;
				gap: 12px;
				align-items: center;
				justify-content: flex-end;

				border: 1px solid rgba(255, 255, 255, 0.2);
				border-radius: 8px;
			}

			&::placeholder {
				font-size: 16px;
				line-height: 140%;
				color: rgba(255, 255, 255, 0.8);
			}
		}

		:global([data-cmdk-group-heading]) {
			padding: 16px 16px 2px 16px;
			color: rgba(255, 255, 255, 0.6);
			font-size: 14px;
			font-weight: 600;
			position: sticky;
			top: 0;
			background-color: $overlay;
		}

		:global([data-cmdk-input]) {
			width: 0;
			flex-grow: 1;
			height: 100%;
			width: 100%;
			height: 100%;
			inset: 0;
			padding: 0 16px;

			position: absolute;

			padding-right: 48px;
			outline: none;
			background: transparent;
		}

		:global([data-cmdk-item]) {
			--bg-opacity: 0;

			display: flex;
			padding: 10px 16px;
			align-items: center;
			gap: 8px;
			cursor: pointer;
			border-radius: 8px;

			background-color: rgba(white, var(--bg-opacity));
			transition: background-color ease 0.2s;
			user-select: none;
		}

		:global(.select[data-cmdk-item]) {
			background-color: rgba($blue, var(--bg-opacity));
		}

		:global([data-highlighted]) {
			--bg-opacity: 0.1;
		}

		:global([data-cmdk-item][data-selected]) {
			--bg-opacity: 0.15;
		}

		:global([data-cmdk-item]) {
			&:active {
				--bg-opacity: 0.2;
			}
		}

		:global(.item-blue) {
			color: $blue;
		}
	}

	.list {
		display: flex;
		flex-direction: column;
		margin-top: 8px;

		max-height: 400px;
		overflow-y: auto;
	}

	.no-options {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
		text-align: center;
		font-size: 16px;
		color: rgba(255, 255, 255, 0.6);
		user-select: none;
	}

	.item {
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
			display: flex;
			justify-content: center;
			align-items: center;
			flex-shrink: 0;
		}

		&-text-area {
			display: flex;
			flex-direction: column;
			width: 0;
			flex-grow: 1;
		}
	}
</style>
