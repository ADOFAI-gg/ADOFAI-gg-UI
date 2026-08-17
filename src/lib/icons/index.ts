import { addCollection } from '@iconify/svelte';
import globalIcons from './global.json' with { type: 'json' };
import legacyIcons from './legacy.json' with { type: 'json' };

addCollection(globalIcons);
addCollection(legacyIcons);
