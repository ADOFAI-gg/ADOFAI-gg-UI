export { default as IconButton, type IconButtonProps } from './icon-button.svelte';
export { default as Container, type ContainerProps } from './container.svelte';

// Safe top-level aliases for master-era components. The monolithic popover wrapper
// is exposed under LegacyPopover while the compound names remain available on Popover.
export {
	default as LegacyPopover,
	type LegacyPopoverPlacement,
	type LegacyPopoverProps,
	type LegacyPopoverTrigger
} from '../popover/legacy.svelte';
export {
	default as PopoverContentPanel,
	type PopoverContentPanelProps
} from '../popover/content-panel.svelte';
export { default as Icon, type IconProps } from './icon.svelte';
export { default as IconProvider, type IconProviderProps } from './icon-provider.svelte';
