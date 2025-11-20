import type { FilterTypeDefinition } from '../../types.js';
import { popover, value } from './component.svelte';

export const definition: FilterTypeDefinition<string> = {
	popover,
	value
};
