import LegacyPopoverSelect, {
	type PopoverSelectProps as LegacyPopoverSelectProps
} from '../search/PopoverSelect.svelte';
import Root, { type RootProps } from './root.svelte';
import Item, { type ItemProps } from './item.svelte';
import type { Component } from 'svelte';

/** Supports both the legacy monolithic selector and the compound beta API. */
type PopoverSelectComponent = Component<LegacyPopoverSelectProps<any>> & {
	Root: Component<RootProps>;
	Item: Component<ItemProps>;
};

export const PopoverSelect = Object.assign(LegacyPopoverSelect as unknown as PopoverSelectComponent, {
	Root: Root as Component<RootProps>,
	Item: Item as Component<ItemProps>
});
export type PopoverSelectProps<CustomData = unknown> = LegacyPopoverSelectProps<CustomData>;
export type { RootProps, ItemProps };
export { Root, Item };
