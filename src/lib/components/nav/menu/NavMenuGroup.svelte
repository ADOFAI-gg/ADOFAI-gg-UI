<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type NavMenuGroupProps = { id: string; children?: Snippet };
</script>

<script lang="ts">
	import { tick } from 'svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { NavMenuGroupData } from './state.js';
	import { getNavMenuContext, NavMenuGroupKey } from './state.js';

	const { id, children }: NavMenuGroupProps = $props();
	const menu = getNavMenuContext();
	const data: NavMenuGroupData = { items: writable([]), highlighted: writable(0) };
	const { groupStack, prevGroup } = menu;
	const { items, highlighted } = data;
	setContext(NavMenuGroupKey, data);

	$effect(() => {
		menu.items.update((items) => ({ ...items, [id]: data }));
		return () =>
			menu.items.update((items) => {
				const next = { ...items };
				delete next[id];
				return next;
			});
	});

	let height = $state(0);
	let isCurrent = $state(id === 'default');
	const isCurrentGroup = $derived($groupStack[$groupStack.length - 1] === id);
	const isExiting = $derived((prevGroup.current?.length ?? 0) > $groupStack.length);

	$effect(() => {
		if (isCurrent) menu.height.set(height);
	});

	$effect(() => {
		if (!isCurrent) return;
		const current = $items[$highlighted];
		for (const item of $items) {
			if (item === current) {
				item.el.focus();
				item.el.setAttribute('data-highlighted', '');
			} else item.el.removeAttribute('data-highlighted');
		}
	});

	const onKeyDown = (event: KeyboardEvent) => {
		const index = $highlighted;
		const currentItems = $items;
		const current = currentItems[index];
		if (!current) return;

		if (event.key === 'ArrowDown' && index < currentItems.length - 1) $highlighted = index + 1;
		else if (event.key === 'ArrowUp' && index > 0) $highlighted = index - 1;
		else if (event.key === 'ArrowLeft' && $groupStack.length > 1) {
			menu.groupStack.update((stack) => stack.slice(0, -1));
		} else if (event.key === 'ArrowRight' && current.target) {
			menu.groupStack.update((stack) => [...stack, current.target as string]);
		} else return;

		event.preventDefault();
	};

	$effect(() => {
		const next = isCurrentGroup;
		if (isCurrent !== next) tick().then(() => (isCurrent = next));
	});
</script>

{#if isCurrent}
	<div
		class="nav-menu-group"
		class:exiting={isExiting}
		bind:clientHeight={height}
		tabindex="-1"
		role="tablist"
		onkeydown={onKeyDown}
	>
		<div class="nav-menu-container">{@render children?.()}</div>
	</div>
{/if}

<style>
	.nav-menu-group {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.nav-menu-container {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
