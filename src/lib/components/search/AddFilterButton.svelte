<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export type AddFilterButtonProps = HTMLButtonAttributes;
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Icon from '@iconify/svelte';
	import { cn } from '$lib/utils/ui.js';

	let { class: className, ...restProps }: AddFilterButtonProps = $props();
</script>

<button class={cn('add-filter-button', className)} {...restProps}>
	<Icon icon="gg:add" width={16} height={16} aria-hidden="true" />
	<span>
		<Localized id="lib-search-add-filter" />
	</span>
</button>

<style>
	.add-filter-button {
		display: flex;
		gap: 6px;
		padding: 0 12px;
		align-items: center;
		opacity: 0.4;
		font-size: 14px;

		transition: opacity ease 0.2s;
		line-height: 140%;
	}

	.add-filter-button:hover {
		opacity: 1;
	}
</style>
