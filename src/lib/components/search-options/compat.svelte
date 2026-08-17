<script lang="ts" module>
	import type { FilterItem, FilterScheme, FilterTypeDefinition } from './types.js';
	import type {
		SearchOptionScheme,
		SearchOptionsData
	} from '../search/SearchOptionsBar.svelte';

	export type SearchOptionsBarProps = {
		scheme?: SearchOptionScheme;
		data?: SearchOptionsData;
		filterScheme?: FilterScheme;
		filters?: FilterItem[];
		sort?: string;
		extraTypes?: Record<string, FilterTypeDefinition>;
	};
</script>

<script lang="ts">
	import LegacySearchOptionsBar from '../search/SearchOptionsBar.svelte';
	import BetaSearchOptionsBar from './root.svelte';

	let {
		scheme,
		data = $bindable({ filter: [], sort: '' }),
		filterScheme,
		filters = $bindable([]),
		sort = $bindable(''),
		extraTypes = {}
	}: SearchOptionsBarProps = $props();
</script>

{#if scheme}
	<LegacySearchOptionsBar {scheme} bind:data />
{:else if filterScheme}
	<BetaSearchOptionsBar {filterScheme} bind:filters bind:sort {extraTypes} />
{/if}
