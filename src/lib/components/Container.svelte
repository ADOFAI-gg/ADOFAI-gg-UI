<script lang="ts">
	import clsx from 'clsx'
	import type { HTMLAttributes } from 'svelte/elements'

	const {
		class: className,
		noPadding = false,
		topMargin = false,
		children,
		...props
	}: {
		noPadding?: boolean
		topMargin?: boolean
	} & HTMLAttributes<HTMLDivElement> = $props()
</script>

{#snippet content()}
	<div
		class={clsx(
			'container',
			{
				'top-margin': topMargin
			},
			className
		)}
		{...props}
	>
		{#if children}
			{@render children()}
		{/if}
	</div>
{/snippet}

{#if noPadding}
	{@render content()}
{:else}
	<div class="container-padder">
		{@render content()}
	</div>
{/if}

<style lang="scss">
	@use '../stylesheets/system/breakpoints' as *;
	@use 'sass:map';

	.container {
		width: 100%;
		margin: 0 auto;

		@each $name, $data in $breakpoints {
			@include breakpoint($name) {
				max-width: map.get($data, 'min-width');
			}
		}
	}

	.top-margin {
		margin-top: 32px;
	}

	.container-padder {
		padding: 0 24px;
	}
</style>
