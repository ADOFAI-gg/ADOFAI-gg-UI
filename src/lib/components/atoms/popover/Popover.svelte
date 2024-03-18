<script lang="ts">
	import 'tippy.js/dist/tippy.css'

	import tippy, { type Placement, type Props } from 'tippy.js'
	import type { Action } from 'svelte/action'

	export let placement: Placement = 'auto'

	let content: HTMLElement
	export let button: HTMLElement | null = null

	export let options: Partial<Props> = {}

	let show = false

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
				onClickOutside: () => {
					instance.hide()
				},
				interactive: true,
				...options,
				onShow: (i) => {
					show = true
					if (options.onShow) options.onShow(i)
				},
				onHidden: (i) => {
					show = false

					if (options.onHidden) options.onHidden(i)
				}
			})

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

<div bind:this={content} role="menu" class="popover-content">
	<slot />
</div>

<style lang="scss">
	.popover-content {
		padding: 16px;
	}
</style>
