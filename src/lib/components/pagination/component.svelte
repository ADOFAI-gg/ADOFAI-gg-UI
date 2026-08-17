<script lang="ts" module>
	import { Pagination as PaginationPrimitive } from 'bits-ui';
	import type { Writable } from 'svelte/store';

	export type PaginationProps = Omit<
		PaginationPrimitive.RootProps,
		'count' | 'perPage' | 'siblingCount' | 'page' | 'onPageChange' | 'children' | 'child'
	> & {
		count: number;
		perPage: number;
		defaultPage?: number;
		siblingCount?: number;
		page?: Writable<number>;
		onPageChange?: PaginationPrimitive.RootProps['onPageChange'];
	};
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { get, writable } from 'svelte/store';
	import { cn } from '$lib/utils/ui.js';

	let {
		count,
		perPage,
		defaultPage = 1,
		siblingCount = 1,
		page: pageStore = writable(defaultPage),
		onPageChange,
		class: className,
		...restProps
	}: PaginationProps = $props();

	let currentPage = $state(get(pageStore));

	$effect(() => {
		const unsubscribe = pageStore.subscribe((value) => {
			currentPage = value;
		});

		return unsubscribe;
	});

	function handlePageChange(value: number) {
		pageStore.set(value);
		onPageChange?.(value);
	}
</script>

<PaginationPrimitive.Root
	{...restProps}
	{count}
	{perPage}
	{siblingCount}
	page={currentPage}
	onPageChange={handlePageChange}
	class={cn('gap-3 flex items-center justify-center', className)}
>
	{#snippet children({ pages })}
		<PaginationPrimitive.PrevButton
			class="size-8 flex items-center justify-center"
			aria-label="Previous page"
		>
			<Icon icon="gg:chevron-left" class="size-4" aria-hidden="true" />
		</PaginationPrimitive.PrevButton>

		{#each pages as page (page.key)}
			{#if page.type === 'ellipsis'}
				<span
					class="size-8 text-base leading-6 flex items-center justify-center opacity-60"
					aria-hidden="true"
				>
					···
				</span>
			{:else}
				<PaginationPrimitive.Page
					{page}
					class="size-8 text-base leading-6 data-selected:font-semibold flex items-center justify-center opacity-60 transition-opacity duration-200 data-selected:opacity-100"
				/>
			{/if}
		{/each}

		<PaginationPrimitive.NextButton
			class="size-8 flex items-center justify-center"
			aria-label="Next page"
		>
			<Icon icon="gg:chevron-right" class="size-4" aria-hidden="true" />
		</PaginationPrimitive.NextButton>
	{/snippet}
</PaginationPrimitive.Root>
