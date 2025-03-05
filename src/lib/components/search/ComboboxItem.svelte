<script lang="ts">
	import { Icon } from '$lib/index'
	import type { SelectOption } from '$lib/types'
	import { melt, type AnyMeltElement } from '@melt-ui/svelte'
	import type { Listbox } from 'node_modules/@melt-ui/svelte/dist/builders/listbox/types'
	import type { Snippet } from 'svelte'

	type T = $$Generic
	type Item = $$Generic<SelectOption<T>>

	interface Props {
		option: Item
		select?: boolean
		subtitleTemplate?: Snippet<[Item]>
		iconTemplate?: Snippet<[Item]>

		meltElement: Listbox['elements']['option']
	}

	let { option, iconTemplate, select = false, subtitleTemplate, meltElement }: Props = $props()
</script>

<div
	class="item item-{option.color || 'default'}"
	class:select
	use:melt={$meltElement({ value: option.value, label: option.label, disabled: option.disabled })}
>
	<div class="item-icon">
		{#if iconTemplate}
			{@render iconTemplate(option)}
		{:else if option.icon}
			<Icon alt="icon" size={16} icon={option.icon} />
		{/if}
	</div>
	<div class="item-text-area">
		<div class="item-title">
			{option.label}
		</div>
		{#if option.subtitle || subtitleTemplate}
			<div class="item-subtitle">
				{#if subtitleTemplate}
					{@render subtitleTemplate(option)}
				{:else}
					{option.subtitle}
				{/if}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@use '../../stylesheets/system/colors' as colors;

	.item {
		--bg-opacity: 0;

		display: flex;
		padding: 10px 16px;
		align-items: center;
		gap: 8px;
		cursor: pointer;
		border-radius: 8px;

		background-color: rgba(white, var(--bg-opacity));
		transition: background-color ease 0.2s;

		&.select {
			background-color: rgba(colors.$blue, var(--bg-opacity));
			&:global([data-selected]) {
				--bg-opacity: 0.1;
			}
		}

		&.item-blue {
			color: colors.$blue;
		}

		&:global([data-highlighted]) {
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
