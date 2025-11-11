<script lang="ts">
	import { emptyMeltElement, melt } from '@melt-ui/svelte'
	import type { AnyMeltElement, MeltElement } from '@melt-ui/svelte/internal/helpers'
	import type { HTMLButtonAttributes } from 'svelte/elements'

	interface Props extends HTMLButtonAttributes {
		meltElement?: AnyMeltElement
	}

	// @ts-expect-error invalid type
	const { meltElement = emptyMeltElement, children, ...props }: Props = $props()
</script>

<button class="icon-button" use:melt={$meltElement} {...props}>
	{@render children?.()}
</button>
