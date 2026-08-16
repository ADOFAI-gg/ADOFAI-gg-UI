import type { FilterTypeDefinition, TextFilterTypeOptions } from '../../types.js';
import { popover, value } from './component.svelte';

export const definition: FilterTypeDefinition<string, TextFilterTypeOptions> = {
	popover,
	value
};
