<script lang="ts">
	import { createPopover, createSync, melt } from '@melt-ui/svelte'
	import type { FloatingConfig } from '@melt-ui/svelte/internal/actions'
	import { fly } from 'svelte/transition'

	export let placement: Exclude<FloatingConfig, null>['placement'] = 'bottom'
	export let open = false

	const {
		elements: { trigger, content },
		states
	} = createPopover({
		positioning: {
			placement
		},
		forceVisible: true
	})

	const sync = createSync(states)

	$: sync.open(open, (v) => (open = v))

	const close = () => (open = false)
</script>

<slot name="button" {trigger} />

{#if open}
	<div use:melt={$content} transition:fly={{ y: 12 }}>
		<slot {close} />
	</div>
{/if}
