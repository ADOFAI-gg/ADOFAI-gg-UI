import type { FilterTypeDefinition } from '../types.js';
import { definition as textDef } from './text/index.js';

export const filterTypes = {
	text: textDef
} as Record<string, FilterTypeDefinition<unknown>>;
