<script lang="ts">
	import type { ButtonSize, ButtonStyle } from '$lib/types.js'
	import { useActions, type ActionArray } from 'svelte-component-actions'
	import Icon from './Icon.svelte'
	import { emptyMeltElement, melt, type AnyMeltElement } from '@melt-ui/svelte'
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'

	type BaseProps =
		| ({ link?: false } & HTMLButtonAttributes)
		| ({ link: true } & HTMLAnchorAttributes)

	type Props = BaseProps & {
		meltElement?: AnyMeltElement
		use?: ActionArray
		variant?: ButtonStyle
		size?: ButtonSize
		transparent?: boolean

		leftIcon?: string
		rightIcon?: string
		iconOnly?: boolean
	}

	const {
		// @ts-expect-error invalid type
		meltElement = emptyMeltElement,
		use = [],
		variant = 'primary',
		size = 'lg',
		leftIcon,
		rightIcon,
		children,
		iconOnly = false,
		link,
		transparent = false,
		...rest
	}: Props = $props()
</script>

<svelte:element
	this={link ? 'a' : 'button'}
	use:useActions={use}
	use:melt={$meltElement}
	class="button button-style-{variant} button-size-{size}"
	class:icon-only={iconOnly}
	class:transparent
	{...rest}
>
	{#if leftIcon}
		<Icon alt="icon" icon={leftIcon} size={24} />
	{/if}
	{@render children?.()}
	{#if rightIcon}
		<Icon alt="icon" icon={rightIcon} size={24} />
	{/if}
</svelte:element>
