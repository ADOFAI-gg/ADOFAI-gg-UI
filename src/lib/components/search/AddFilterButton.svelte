<script lang="ts">
	import { Icon, Translation } from '$lib/index'
	import type { AnyMeltElement } from '@melt-ui/svelte'
	import { melt, emptyMeltElement } from '@melt-ui/svelte'

	interface Props {
		meltElement: AnyMeltElement
	}

	// @ts-expect-error invalid type
	const { meltElement = emptyMeltElement }: Props = $props()
</script>

<button class="add-filter-button" use:melt={$meltElement}>
	<Icon alt="icon" size={16} icon="add" />
	<span>
		<Translation key="ui-search:add-filter" />
	</span>
</button>

<style lang="scss">
	.add-filter-button {
		display: flex;
		gap: 6px;
		padding: 0 12px;
		align-items: center;
		opacity: 0.4;
		font-size: 14px;

		transition: opacity ease 0.2s;
		line-height: 140%;

		&:hover {
			opacity: 1;
		}
	}
</style>
