<script lang="ts">
	import type { TranslationKey } from '$lib/index'
	import type { Snippet } from 'svelte'
	import Icon from '../Icon.svelte'
	import Translation from '$lib/utils/Translation.svelte'
	import type { AnyMeltElement } from '@melt-ui/svelte'
	import { emptyMeltElement, melt } from '@melt-ui/svelte'

	interface Props {
		icon: string
		objectiveKey: TranslationKey
		children?: Snippet
		meltElement?: AnyMeltElement
		hasValue?: boolean
		danger?: boolean
		onclick?: () => void
	}

	const {
		icon,
		objectiveKey,
		children,
		// @ts-expect-error invalid typed
		meltElement = emptyMeltElement,
		onclick,
		hasValue,
		danger
	}: Props = $props()
</script>

<button class="search-option-chip" use:melt={$meltElement} class:danger {onclick}>
	<div class="icon">
		<Icon alt="icon" {icon} size={16} />
	</div>
	<span class="objective">
		<Translation key={objectiveKey} />
	</span>
	{#if children && hasValue}
		<div class="value">
			{@render children()}
		</div>
	{/if}
</button>

<style lang="scss">
	@use '../../stylesheets/system/colors' as *;

	.search-option-chip {
		height: 24px;
		padding: 0 12px;
		background-color: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		display: flex;
		align-items: center;
		gap: 6px;
		line-height: 140%;

		font-size: 14px;
		max-width: 320px;

		&.danger {
			color: $red;
			background-color: rgba($red, 0.2);
		}
	}

	.icon {
		flex-shrink: 0;
	}

	.objective {
		flex-shrink: 0;
		font-weight: 700;
	}

	.value {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		flex-shrink: 1;
	}
</style>
