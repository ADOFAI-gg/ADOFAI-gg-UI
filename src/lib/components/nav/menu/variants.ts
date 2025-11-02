import { tv } from 'tailwind-variants';

export const menuItem = tv({
	base: 'px-4 py-2.5 rounded-lg cursor-pointer transition-colors select-none justify-between flex items-center',
	variants: {
		variant: {
			default: 'data-selected:bg-white/10 data-selected:active:bg-white/15',
			selection:
				'data-[current-value=true]:bg-gg-blue/10 data-selected:bg-gg-blue/15! data-selected:active:bg-gg-blue/20!',
			danger: 'data-selected:bg-gg-red/10 data-selected:active:bg-gg-red/15 text-gg-red'
		}
	},
	defaultVariants: {
		variant: 'default'
	}
});
