<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type NavMenuProps = { children?: Snippet };
</script>

<script lang="ts">
	import { Previous } from 'runed';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import PopoverContentPanel from '../../popover/content-panel.svelte';
	import type { NavMenuContext } from './state.js';
	import { NavMenuContextKey } from './state.js';

	const { children }: NavMenuProps = $props();
	const groupStack = writable(['default']);
	const data: NavMenuContext = {
		groupStack,
		prevGroup: new Previous(() => $groupStack),
		items: writable({}),
		height: writable(0)
	};

	setContext(NavMenuContextKey, data);
	const { height } = data;
</script>

<div class="nav-menu">
	<PopoverContentPanel class="contain-paint">
		<div class="menu-content-area" style={`--height: ${$height}px;`}>
			{@render children?.()}
		</div>
	</PopoverContentPanel>
</div>

<style>
	.nav-menu {
		width: 100vw;
		max-width: 312px;
	}

	.menu-content-area {
		position: relative;
		width: 100%;
		height: var(--height);
		transition: height 0.2s ease;
	}
</style>
