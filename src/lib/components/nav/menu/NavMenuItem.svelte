<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	export type NavMenuItemProps = {
		children?: Snippet;
		switchGroup?: string;
		type?: 'select' | 'normal' | 'danger';
		selected?: boolean;
		link?: boolean;
		onclick?: () => void;
	} & Omit<HTMLButtonAttributes & HTMLAnchorAttributes, 'children' | 'onclick' | 'type'>;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getNavMenuContext, getNavMenuGroupContext } from './state.js';

	const {
		children,
		switchGroup,
		type = 'normal',
		selected = false,
		link = false,
		onclick,
		...restProps
	}: NavMenuItemProps = $props();

	const menu = getNavMenuContext();
	const group = getNavMenuGroupContext();
	const { items } = group;
	let element = $state<HTMLElement | null>(null);

	$effect(() => {
		if (!element) return;
		const current = element;
		group.items.update((items) => [...items, { el: current, target: switchGroup }]);
		return () => group.items.update((items) => items.filter((item) => item.el !== current));
	});

	const handlePointerMove = () => {
		if (!element) return;
		const index = $items.findIndex((item) => item.el === element);
		if (index >= 0) group.highlighted.set(index);
	};

	const handleClick = () => {
		if (!link) onclick?.();
		if (switchGroup) menu.groupStack.update((stack) => [...stack, switchGroup]);
	};
</script>

<svelte:element
	this={link ? 'a' : 'button'}
	bind:this={element}
	{...restProps}
	class={`nav-menu-item item-${type}`}
	data-selected={selected || undefined}
	onpointermove={handlePointerMove}
	onclick={handleClick}
>
	<span class="text">{@render children?.()}</span>
	{#if switchGroup}<Icon icon="gg:chevron-right" class="size-4.5" aria-hidden="true" />{/if}
	{#if link}<Icon icon="gg:external" class="size-4" aria-hidden="true" />{/if}
</svelte:element>

<style>
	.nav-menu-item {
		display: flex;
		align-items: center;
		padding: 10px 16px;
		border-radius: 8px;
		transition: background-color 0.2s ease;
		outline: none;
	}

	.text {
		flex-grow: 1;
		text-align: left;
	}

	.item-normal {
		background: rgb(255 255 255 / var(--bg-opacity, 0));
	}
	.item-select {
		background: rgb(59 132 241 / var(--bg-opacity, 0));
	}
	.item-danger {
		color: var(--color-gg-red);
		background: rgb(245 79 81 / var(--bg-opacity, 0));
	}
	.nav-menu-item[data-selected] {
		--bg-opacity: 0.1;
	}
	.nav-menu-item[data-highlighted] {
		--bg-opacity: 0.15;
	}
	.nav-menu-item:active {
		--bg-opacity: 0.2;
	}
</style>
