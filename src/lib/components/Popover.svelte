<script lang="ts">
	import 'tippy.js/dist/tippy.css'
	import 'tippy.js/animations/shift-away.css'

	import tippy, { type Placement, type Props } from 'tippy.js'
	import type { Action } from 'svelte/action'
	import { BROWSER } from 'esm-env'

	export let placement: Placement = 'auto'

	let content: HTMLElement
	export let button: HTMLElement | null = null

	export let options: Partial<Props> = {}

	let close: () => void = () => {}

	$: subscriber = {
		subscribe: () => {
			if (typeof window === 'undefined') {
				return () => null
			}

			if (!content || !button) return () => null

			const instance = (tippy as unknown as typeof tippy.default)(button, {
				content,
				trigger: 'click',
				placement,
				arrow: false,
				popperOptions: {
					strategy: 'absolute',
					modifiers: [
						{
							name: 'preventOverflow'
						},
						...(options.popperOptions?.modifiers ?? [])
					],
					...options.popperOptions
				},
				hideOnClick: 'toggle',
				animation: 'shift-away',
				onClickOutside: () => {
					instance.hide()
				},
				interactive: true,
				...options,
				onShow: (i) => {
					if (options.onShow) options.onShow(i)
				},
				onHidden: (i) => {
					if (options.onHidden) options.onHidden(i)
				}
			})

			close = () => {
				instance.hide()
			}

			return () => {
				instance?.destroy?.()
			}
		}
	}

	$subscriber

	const buttonRef: Action = (node) => {
		button = node
	}
</script>

<slot name="button" {buttonRef} />

{#if BROWSER}
	<div bind:this={content} role="menu">
		<slot {close} />
	</div>
{/if}
