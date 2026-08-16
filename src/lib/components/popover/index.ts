import LegacyPopover from './legacy.svelte';
import Root from './components/root.svelte';
import Trigger from './components/trigger.svelte';
import Content from './components/content.svelte';
import Portal from './components/portal.svelte';
import Overlay from './components/overlay.svelte';

export { Root, Trigger, Content, Portal, Overlay };
export type { RootProps } from './components/root.svelte';
export type { TriggerProps } from './components/trigger.svelte';
export type { ContentProps } from './components/content.svelte';
export type { PortalProps } from './components/portal.svelte';
export type { OverlayProps } from './components/overlay.svelte';

export { default as LegacyPopover, type LegacyPopoverProps } from './legacy.svelte';
export {
	default as PopoverContentPanel,
	type PopoverContentPanelProps
} from './content-panel.svelte';
export type { LegacyPopoverPlacement, LegacyPopoverTrigger } from './legacy.svelte';

/** Supports both the master monolithic component and beta compound usage. */
export const Popover = Object.assign(LegacyPopover, { Root, Trigger, Content, Portal, Overlay });
