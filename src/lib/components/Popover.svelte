<script lang="ts">
	import { createPopover, createSync, melt } from '@melt-ui/svelte'
	import type { FloatingConfig } from '@melt-ui/svelte/internal/actions'
	import type { Snippet } from 'svelte'
	import { fly } from 'svelte/transition'

	interface Props {
		placement?: Exclude<FloatingConfig, null>['placement']
		open?: boolean
		trigger: Snippet<[typeof trigger]>
		children: Snippet<[{ close: () => void; open: boolean }]>
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

	let ref: HTMLElement | null = $state(null)

	$effect(() => {
		if (open && ref) {
			let el: HTMLElement | null = ref.querySelector('[autofocus]')

			if (!el) el = ref.querySelector('input')

			el?.focus()
		}
	})
</script>

{@render triggerSnippet(trigger)}

{#if open}
	<div bind:this={ref} use:melt={$content} transition:fly={{ y: 12 }}>
		{@render children({ close, open })}
	</div>
{/if}
