import type { FilterTypeDefinition } from '../types.js';
import { definition as textDef } from './text/index.js';

export const filterTypes = {
	text: textDef
} as unknown as Record<string, FilterTypeDefinition<unknown, unknown>>;
