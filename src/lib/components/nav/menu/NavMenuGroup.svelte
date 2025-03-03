<script lang="ts">
	import { setContext, tick, type Snippet } from 'svelte'
	import { getNavMenuContext, NavMenuGroupKey, type NavMenuGroupData } from './state'
	import { writable } from 'svelte/store'
	import { fly } from 'svelte/transition'

	interface Props {
		children: Snippet
		id: string
	}

	const { children, id }: Props = $props()

	const menu = getNavMenuContext()
	const { groupStack } = menu

	const data = {
		highlighted: writable(0),
		items: writable([])
	} as NavMenuGroupData
	setContext(NavMenuGroupKey, data)

	$effect(() => {
		menu.items.update((prev) => ({ ...prev, [id]: data }))
		return () => {
			menu.items.update((prev) => {
				const updated = { ...prev }
				delete updated[id]

				return updated
			})
		}
	})

	const { items, highlighted } = data

	let height = $state(0)

	const isCurrentGroup = $derived($groupStack[$groupStack.length - 1] === id)
	let isCurrent = $state(id === 'default')

	$effect(() => {
		if (!isCurrent) return
		menu.height.set(height)
	})

	$effect(() => {
		if (!isCurrent) return

		const current = $items[$highlighted]

		// if ($highlighted < 0) {
		// 	$highlighted = 0
		// 	return
		// }

		// if ($highlighted >= $items.length) {
		// 	$highlighted = $items.length - 1
		// 	return
		// }

		for (let i = 0; i < $items.length; i++) {
			const item = $items[i]
			if (!item) continue
			if (item === current) {
				item.el.focus()
				item.el.setAttribute('data-highlighted', '')
			} else {
				item.el.removeAttribute('data-highlighted')
			}
		}
	})

	const onKeyDown = (e: KeyboardEvent) => {
		const btn = $items[$highlighted]

		if (!btn) return

		const idx = $items.indexOf(btn)
		if (idx >= 0) {
			switch (e.key) {
				case 'ArrowDown':
					if (idx < $items.length && $items[idx + 1]?.el?.isConnected) {
						$highlighted = idx + 1
					}
					break
				case 'ArrowUp':
					if (idx > 0 && $items[idx - 1]?.el?.isConnected) {
						$highlighted = idx - 1
					}
					break
				case 'ArrowLeft':
					if ($groupStack.length > 1) {
						groupStack.update((prev) => {
							const newValue = [...prev]
							newValue.pop()

							return newValue
						})
					}
					break
				case 'ArrowRight': {
					const currentItem = $items[$highlighted]
					if (currentItem && currentItem.target) {
						menu.groupStack.update((x) => [...x, currentItem.target!])
					}
					break
				}
			}
		}
	}

	$effect(() => {
		const value = id === $groupStack[$groupStack.length - 1]
		if (isCurrent != value) {
			tick().then(() => (isCurrent = value))
		}
	})

	const isExiting = $derived.by(() => {
		return (menu.prevGroup.current?.length ?? 0) > $groupStack.length
	})
</script>

{#if isCurrent}
	<div
		in:fly={{
			duration: 200,
			x: isExiting ? '-110%' : '110%',
			y: 0,
			opacity: 1
		}}
		out:fly={{
			duration: 200,
			x: isExiting ? '110%' : '-110%',
			y: 0,
			opacity: 1
		}}
		bind:clientHeight={height}
		class="nav-menu-group"
		tabindex="-1"
		role="tablist"
		onkeydown={onKeyDown}
	>
		<div class="nav-menu-container">
			{@render children()}
		</div>
	</div>
{/if}

<style lang="scss">
	.nav-menu-group {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}

	.nav-menu-container {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
