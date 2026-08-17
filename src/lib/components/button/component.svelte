<script lang="ts" module>
	import type { Button as ButtonPrimitive } from 'bits-ui';
	import type { BaseButtonProps } from './props.js';

	export type ButtonProps = BaseButtonProps & ButtonPrimitive.RootProps;
</script>

<script lang="ts">
	import { Button } from 'bits-ui';
	import Icon from '../legacy-atoms/icon.svelte';
	import { cn } from '$lib/index.js';
	import { button, buttonIconOnly } from './props.js';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		disabled = false,
		class: className,
		children,
		transparent,
		size,
		variant,
		link = false,
		leftIcon,
		rightIcon,
		iconOnly = false,
		meltElement: _meltElement,
		use: _use,
		...restProps
	}: ButtonProps = $props();

	void _meltElement;
	void _use;

	const legacyTriggerProps = $derived(
		_meltElement && typeof _meltElement === 'object' && !Array.isArray(_meltElement)
			? (_meltElement as Record<string, unknown>)
			: {}
	);

	const classNameWithVariants = $derived(
		cn(
			button({ size, variant }),
			iconOnly && buttonIconOnly(size),
			transparent && 'text-white/60',
			className
		)
	);
	const anchorProps = $derived({ ...legacyTriggerProps, ...restProps } as HTMLAnchorAttributes);
	const rootProps = $derived({ ...legacyTriggerProps, ...restProps } as ButtonPrimitive.RootProps);
</script>

{#snippet content()}
	{#if leftIcon}
		<Icon alt="icon" icon={leftIcon} size={24} />
	{/if}
	{@render children?.()}
	{#if rightIcon}
		<Icon alt="icon" icon={rightIcon} size={24} />
	{/if}
{/snippet}

{#if link}
	<a bind:this={ref} class={classNameWithVariants} {...anchorProps}>
		{@render content()}
	</a>
{:else}
	<Button.Root bind:ref {disabled} class={classNameWithVariants} {...rootProps}>
		{@render content()}
	</Button.Root>
{/if}
