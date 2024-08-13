<script lang="ts">
	import type { ButtonSize, ButtonStyle } from '$lib/types.js'
	import { useActions, type ActionArray } from 'svelte-component-actions'
	import Icon from './Icon.svelte'
	import { emptyMeltElement, melt, type AnyMeltElement } from '@melt-ui/svelte'

	// @ts-expect-error invalid type
	export let meltElement: AnyMeltElement = emptyMeltElement

	export let use: ActionArray = []

	export let variant: ButtonStyle = 'primary'
	export let size: ButtonSize = 'lg'

	export let leftIcon: string | null = null
	export let rightIcon: string | null = null
	export let iconOnly: boolean = false
</script>

<button
	use:useActions={use}
	use:melt={$meltElement}
	class="button button-style-{variant} button-size-{size}"
	class:icon-only={iconOnly}
	on:click
	{...$$restProps}
>
	{#if leftIcon}
		<Icon alt="icon" icon={leftIcon} size={24} />
	{/if}
	<slot />
	{#if rightIcon}
		<Icon alt="icon" icon={rightIcon} size={24} />
	{/if}
</button>
