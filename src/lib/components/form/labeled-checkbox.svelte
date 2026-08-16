<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import type { Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';
	import type { CheckboxProps, CheckboxSize } from './checkbox.svelte';

	const labeledCheckboxStyles = tv({
		base: 'gap-1.5 flex cursor-pointer items-center select-none',
		variants: {
			size: {
				sm: 'text-sm',
				md: 'text-base',
				lg: 'text-lg'
			}
		},
		defaultVariants: {
			size: 'md'
		}
	});

	export type LabeledCheckboxProps = Omit<CheckboxProps, 'children' | 'child' | 'class'> & {
		size?: CheckboxSize;
		children?: Snippet;
		class?: string;
	};
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Checkbox from './checkbox.svelte';

	let {
		children,
		checked = $bindable(false),
		indeterminate = $bindable(false),
		ref = $bindable(null),
		size = 'md',
		required = false,
		class: className,
		...restProps
	}: LabeledCheckboxProps = $props();
</script>

<label class={cn(labeledCheckboxStyles({ size }), className)}>
	<Checkbox bind:checked bind:indeterminate bind:ref {size} {required} {...restProps} />

	<span>
		{#if required}
			<span class="text-gg-red">
				<Localized id="lib-form-required" />
			</span>
		{/if}
		{@render children?.()}
	</span>
</label>
