<script lang="ts">
	import { createPagination, melt } from '@melt-ui/svelte'
	import { writable, type Writable } from 'svelte/store'
	import Icon from './Icon.svelte'

	interface Props {
		count: number
		perPage: number
		defaultPage?: number
		siblingCount?: number
		page?: Writable<number>
	}

	let { count, perPage, defaultPage = 1, siblingCount = 1, page = writable(1) }: Props = $props()

	const {
		elements: { pageTrigger, prevButton, nextButton },
		options,
		states: { pages, page: pageState }
	} = createPagination({
		count,
		perPage,
		defaultPage,
		siblingCount,
		page
	})

	$effect(() => {
		options.count.set(count)
	})
</script>

<div class="pagination">
	<button class="pagination-button" use:melt={$prevButton}>
		<Icon alt="prev" icon="chevronLeft" size={16} />
	</button>
	{#each $pages as page (page.key)}
		{#if page.type === 'ellipsis'}
			<span class="pagination-item">···</span>
		{:else}
			<button class="pagination-item" use:melt={$pageTrigger(page)}>{page.value}</button>
		{/if}
	{/each}
	<button class="pagination-button" use:melt={$nextButton}>
		<Icon alt="prev" icon="chevronRight" size={16} />
	</button>
</div>

<style lang="scss">
	.pagination {
		display: flex;
		gap: 12px;
		align-items: center;
		justify-content: center;
	}

	.pagination-item {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
		font-size: 16px;
		line-height: 24px;
		opacity: 0.6;
		transition: opacity ease 0.2s;

		&[data-selected] {
			opacity: 1;
			font-weight: 600;
		}
	}

	.pagination-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 32px;
		height: 32px;
	}
</style>
