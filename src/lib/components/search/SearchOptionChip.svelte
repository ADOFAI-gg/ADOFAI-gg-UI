<script lang="ts">
	import type { TranslationKey } from 'src/main'
	import type { Snippet } from 'svelte'
	import Icon from '../Icon.svelte'
	import Translation from '$lib/utils/Translation.svelte'
	import type { AnyMeltElement } from '@melt-ui/svelte'
	import { melt } from '@melt-ui/svelte'

	interface Props {
		icon: string
		objectiveKey: TranslationKey
		children?: Snippet
		meltElement: AnyMeltElement
		hasValue?: boolean
	}

	const { icon, objectiveKey, children, meltElement, hasValue }: Props = $props()
</script>

<button class="search-option-chip" use:melt={$meltElement}>
	<Icon alt="icon" {icon} size={16} />
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
	}

	.objective {
		font-weight: 700;
	}
</style>
