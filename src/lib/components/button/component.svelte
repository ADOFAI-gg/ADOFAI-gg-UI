<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { Button } from 'bits-ui';
	import { tv, type VariantProps } from 'tailwind-variants';

	const button = tv({
		base: 'rounded-lg font-semibold cursor-pointer transition-colors text-white',
		variants: {
			variant: {
				primary: 'bg-gg-blue hover:bg-gg-blue-hover active:bg-gg-blue-active',
				danger: 'bg-gg-red hover:bg-gg-red-hover active:bg-gg-red-active',
				ghostLight: 'bg-transparent hover:bg-white/10 active:bg-white/20',
				ghostDark: 'bg-transparent hover:bg-[#00020f]/10 active:bg-[#00020f]/20',
				outlined:
					'border-white/20 hover:bg-white/10 active:bg-white active:text-black inset-ring inset-ring-white/20'
			},
			size: {
				sm: 'px-3 py-1.5 text-xs',
				md: 'px-4 py-2 text-sm',
				lg: 'px-6 py-3 text-base'
			}
		},
		defaultVariants: {
			size: 'lg',
			variant: 'primary'
		}
	});

	export type ButtonVariant = VariantProps<typeof button>['variant'];
	export type ButtonSize = VariantProps<typeof button>['size'];

	export type ButtonProps = {
		size?: ButtonSize;
		variant?: ButtonVariant;
		transparent?: boolean;
	} & Button.RootProps;
</script>

<script lang="ts">
	let {
		ref = $bindable(null),
		disabled = false,
		class: className,
		transparent,
		size,
		variant,
		...restProps
	}: ButtonProps = $props();
</script>

<Button.Root
	bind:ref
	{disabled}
	class={cn(button({ size, variant }), transparent && 'text-white/60', className)}
	{...restProps}
/>
