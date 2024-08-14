<script lang="ts">
	import { createDropdownMenu, createSync, melt } from '@melt-ui/svelte'
	import { setContext } from 'svelte'
	import { MenuContext, type MenuContextData } from './symbols'
	import { fly } from 'svelte/transition'
	import type { FloatingPlacement } from '$lib/types'

	export let placement: FloatingPlacement = 'bottom'
	export let closeOnItemClick = true
	export let open = false

	const result = createDropdownMenu({
		positioning: {
			placement
		},
		forceVisible: true,
		closeOnItemClick
	})

	setContext(MenuContext, result as MenuContextData)

	const {
		elements: { trigger, menu },
		states
	} = result

	const sync = createSync(states)

	$: sync.open(open, (v) => (open = v))
</script>

<slot name="button" {trigger} />

{#if open}
	<div transition:fly={{ y: 12 }} class="menu-popup" use:melt={$menu}>
		<slot />
	</div>
{/if}

<!-- <div class="menu">
		<slot {close} />
	</div> -->

<style lang="scss">
	.menu-popup {
		padding: 8px 0;
		background-color: rgba(var(--color-dropdown), 1);
		width: 100%;
		max-width: 180px;

		box-shadow:
			0px 0px 12px rgba(0, 0, 0, 0.2),
			0px 0px 24px rgba(0, 0, 0, 0.2);
		border-radius: 8px;

		z-index: 999;
	}
</style>
