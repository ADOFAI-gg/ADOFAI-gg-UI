<script lang="ts">
	import { createPopover, createSync, melt } from '@melt-ui/svelte'
	import type { FloatingConfig } from '@melt-ui/svelte/internal/actions'
	import type { Snippet } from 'svelte'
	import { fly } from 'svelte/transition'

	interface Props {
		placement?: Exclude<FloatingConfig, null>['placement']
		open?: boolean
		trigger: Snippet<[typeof trigger]>
		children: Snippet<[{ close: () => void }]>
	}

	let { placement, open = $bindable(false), trigger: triggerSnippet, children }: Props = $props()

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

	$effect(() => {
		sync.open(open, (v) => (open = v))
	})

	const close = () => (open = false)
</script>

{@render triggerSnippet(trigger)}

{#if open}
	<div use:melt={$content} transition:fly={{ y: 12 }}>
		{@render children({ close })}
	</div>
{/if}
