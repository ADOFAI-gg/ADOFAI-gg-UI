<script lang="ts">
	import PopoverContentPanel from '$lib/components/PopoverContentPanel.svelte'
	import { setContext, type Snippet } from 'svelte'
	import NavMenuGroup from './NavMenuGroup.svelte'
	import NavMenuItem from './NavMenuItem.svelte'
	import { NavMenuContextKey, type NavMenuContext } from './state'
	import { writable } from 'svelte/store'
	import { Previous } from 'runed'
	import NavMenuGroupHeader from './NavMenuGroupHeader.svelte'
	import NavMenuDivider from './NavMenuDivider.svelte'

	const groupStack = writable(['default'])

	const data = {
		groupStack: groupStack,
		prevGroup: new Previous(() => $groupStack),
		items: writable({}),
		height: writable(0)
	} as NavMenuContext

	setContext(NavMenuContextKey, data)

	const { height } = data

	interface Props {
		children?: Snippet
	}

	const { children }: Props = $props()
</script>

<div class="nav-menu">
	<PopoverContentPanel>
		<div class="menu-content-area" style="--height: {$height}px;">
			{@render children?.()}
		</div>
	</PopoverContentPanel>
</div>

<style lang="scss">
	.nav-menu {
		max-width: 312px;
		width: 100vw;

		> :global(.popover-content-panel) {
			contain: paint;
		}
	}

	.menu-content-area {
		position: relative;
		width: 100%;

		height: var(--height);
		transition: height ease 0.2s;
	}
</style>
