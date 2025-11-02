import type { CommandItemProps } from 'bits-ui';
import type { VariantProps } from 'tailwind-variants';
import type { menuItem } from './variants.js';

export type MenuItemProps = {
	variant?: VariantProps<typeof menuItem>['variant'];
	icon?: string;
} & CommandItemProps;
