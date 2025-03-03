<script lang="ts">
	import type { Snippet } from 'svelte'
	import { getNavMenuContext, getNavMenuGroupContext, type NavMenuItemData } from './state'
	import Icon from '$lib/components/Icon.svelte'
	import type { HTMLAnchorAttributes } from 'svelte/elements'

	type Props = {
		children: Snippet
		switchGroup?: string
		type?: 'select' | 'normal' | 'danger'
		selected?: boolean
	} & (
		| {
				link?: false
				onclick?: () => void
		  }
		| ({ link: true } & HTMLAnchorAttributes)
	)

	const { children, selected, switchGroup, type = 'normal', ...restProps }: Props = $props()

	const grp = getNavMenuGroupContext()
	const root = getNavMenuContext()
	let btn: HTMLButtonElement | HTMLAnchorElement | null = null

	$effect(() => {
		if (btn) {
			const b = btn
			grp.items.update((prev) => {
				return [...prev, { target: switchGroup, el: b }]
			})
			return () => {
				grp.items.update((prev) => {
					const v = [...prev]

					const idx = v.findIndex((x) => x.el === b)
					if (idx >= 0) {
						v.splice(idx, 1)
					}

					return v
				})
			}
		}
	})

	const { items, highlighted } = grp

	const onPointerMove = () => {
		if (!btn) return

		const idx = $items.findIndex((x) => x.el === btn)
		if (idx >= 0) $highlighted = idx
	}

	const onClick = () => {
		if (!restProps.link) restProps.onclick?.()

		if (switchGroup) {
			root.groupStack.update((v) => [...v, switchGroup])
		}
	}

	const finalProps = $derived.by(() => {
		const { link, ...rest } = restProps
		const result: any = { ...rest }
		if (!link) {
			result.onclick = onClick
		}

		return result
	})
</script>

<svelte:element
	this={restProps.link ? 'a' : 'button'}
	class="item item-{type}"
	data-selected={selected || undefined}
	bind:this={btn}
	onpointermove={onPointerMove}
	{...finalProps}
>
	<div class="text">
		{@render children()}
	</div>
	{#if switchGroup}
		<Icon icon="chevronRight" size={18} alt="icon" />
	{/if}

	{#if restProps.link}
		<Icon icon="external" size={16} alt="icon" />
	{/if}
</svelte:element>

<style lang="scss">
	@use '../../../stylesheets/system/colors' as colors;

	.item {
		display: flex;
		align-items: center;
		padding: 10px 16px;
		border-radius: 8px;
		transition: background-color ease 0.2s;

		--bg-opacity: 0;

		&-normal {
			background-color: rgba(255, 255, 255, var(--bg-opacity));
		}

		&-select {
			background-color: rgba(59, 132, 241, var(--bg-opacity));
		}

		&-danger {
			background-color: rgba(colors.$red, var(--bg-opacity));
			color: colors.$red;
		}

		outline: none;

		&:global([data-selected]) {
			--bg-opacity: 0.1;
		}

		&:global([data-highlighted]) {
			--bg-opacity: 0.15;
		}

		&:active {
			--bg-opacity: 0.2;
		}
	}

	.text {
		flex-grow: 1;
		text-align: left;
	}
</style>
