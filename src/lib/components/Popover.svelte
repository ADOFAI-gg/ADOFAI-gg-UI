<script lang="ts">
	import { createPopover, createSync, melt } from '@melt-ui/svelte'
	import type { FloatingConfig } from '@melt-ui/svelte/internal/actions'
	import { onMount, tick, type Snippet } from 'svelte'
	import { fly, type FlyParams, type TransitionConfig } from 'svelte/transition'

	interface Props {
		placement?: Exclude<FloatingConfig, null>['placement']
		open?: boolean
		trigger: Snippet<[typeof trigger]>
		children: Snippet<[{ close: () => void; open: boolean }]>
		defaultOpen?: boolean
		lockOnClose?: boolean
	}

	let {
		placement,
		open = $bindable(false),
		trigger: triggerSnippet,
		children,
		defaultOpen = false,
		lockOnClose
	}: Props = $props()

	const {
		elements: { trigger, content },
		states
	} = createPopover({
		positioning: {
			placement
		},

		forceVisible: true,
		defaultOpen
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

	onMount(() => {
		if (defaultOpen) {
			tick().then(() => {
				states.open.set(true)
			})
		}
	})

	const out = (el: HTMLElement, params: FlyParams): TransitionConfig => {
		const actualTransition = fly(el, params)

		if (!lockOnClose) return actualTransition

		const startTop = el.style.top
		const startLeft = el.style.left

		return {
			css: actualTransition.css,
			delay: actualTransition.delay,
			duration: actualTransition.duration,
			easing: actualTransition.easing,
			tick: () => {
				el.style.top = startTop
				el.style.left = startLeft
			}
		}
	}
</script>

{@render triggerSnippet(trigger)}

{#if open}
	<div
		bind:this={ref}
		use:melt={$content}
		in:fly={{ y: 12, duration: 400 }}
		out:out={{ y: 12, duration: 400 }}
		style="z-index: 9999;"
	>
		{@render children({ close, open })}
	</div>
{/if}
