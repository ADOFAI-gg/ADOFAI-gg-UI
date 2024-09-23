<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'
	import clsx from 'clsx'

	interface Props extends HTMLAttributes<HTMLElement> {
		noPadding?: boolean
	}

	const { children, noPadding, class: className, ...props }: Props = $props()
</script>

<section {...props} class={clsx('panel', { 'no-padding': noPadding }, className)}>
	{#if children}
		{@render children()}
	{/if}
</section>
