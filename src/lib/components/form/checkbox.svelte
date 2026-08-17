<script lang="ts" module>
	import { Checkbox as CheckboxPrimitive } from 'bits-ui';
	import { tv, type VariantProps } from 'tailwind-variants';
	import { cn } from '$lib/utils/ui.js';

	export const checkboxStyles = tv({
		base: [
			'group relative inline-flex shrink-0 items-center justify-center',
			'cursor-pointer rounded border-2 border-white/20 bg-transparent text-white',
			'transition-colors outline-none',
			'focus-visible:border-white/60',
			'disabled:cursor-not-allowed disabled:opacity-40'
		],
		variants: {
			size: {
				sm: 'size-4 rounded',
				md: 'size-5 rounded-md',
				lg: 'size-6 rounded-md'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	const iconStyles = tv({
		base: 'pointer-events-none absolute opacity-0 transition-opacity duration-100',
		variants: {
			size: {
				sm: 'size-2',
				md: 'size-2.5',
				lg: 'size-3'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	export type CheckboxSize = NonNullable<VariantProps<typeof checkboxStyles>['size']>;
	export type CheckboxProps = Omit<CheckboxPrimitive.RootProps, 'children' | 'child'> & {
		size?: CheckboxSize;
	};
</script>

<script lang="ts">
	let {
		checked = $bindable(false),
		indeterminate = $bindable(false),
		ref = $bindable(null),
		class: className,
		size = 'md',
		...restProps
	}: CheckboxProps = $props();
</script>

<CheckboxPrimitive.Root
	bind:checked
	bind:indeterminate
	bind:ref
	class={cn(checkboxStyles({ size }), className)}
	{...restProps}
>
	{#snippet children({ checked: isChecked, indeterminate: isIndeterminate })}
		{#if isIndeterminate}
			<svg
				class={cn(iconStyles({ size }), 'opacity-100')}
				viewBox="0 0 10 2"
				fill="none"
				aria-hidden="true"
			>
				<path d="M1 1L9 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		{:else if isChecked}
			<svg
				class={cn(iconStyles({ size }), 'opacity-100')}
				viewBox="0 0 10 8"
				fill="none"
				aria-hidden="true"
			>
				<path
					d="M1 4L3.8 7L9 1"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		{/if}
	{/snippet}
</CheckboxPrimitive.Root>
