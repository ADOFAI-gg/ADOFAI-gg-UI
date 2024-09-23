<script lang="ts">
	import type { FloatingPlacement } from '$lib/types'
	import { createTooltip, melt } from '@melt-ui/svelte'
	import type { AnyMeltElement } from '@melt-ui/svelte/internal/helpers'
	import type { Snippet } from 'svelte'
	import PopoverContentPanel from './PopoverContentPanel.svelte'
	import { fly } from 'svelte/transition'

	interface Props {
		trigger: Snippet<[{ trigger: AnyMeltElement }]>
		children: Snippet
		placement?: FloatingPlacement
		closeOnPointerDown?: boolean
	}

	const {
		trigger: triggerSnippet,
		placement = 'bottom',
		closeOnPointerDown = true,
		children
	}: Props = $props()

	const {
		elements: { trigger, content },
		states: { open }
	} = createTooltip({
		positioning: {
			placement
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown,
		forceVisible: true,
		disableHoverableContent: true
	})
</script>

{@render triggerSnippet({ trigger })}

{#if $open}
	<div transition:fly={{ y: 12 }} use:melt={$content}>
		<PopoverContentPanel>
			<div class="tooltip-panel">
				{@render children()}
			</div>
		</PopoverContentPanel>
	</div>
{/if}

<style lang="scss">
	.tooltip-panel {
		max-width: 240px;
	}
</style>
