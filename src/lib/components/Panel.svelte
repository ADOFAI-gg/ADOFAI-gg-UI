<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'
	import clsx from 'clsx'

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children: Snippet
	}

	const { children, class: className, ...props }: Props = $props()
</script>

<div {...props} class={clsx('panel', className)}>{@render children()}</div>
