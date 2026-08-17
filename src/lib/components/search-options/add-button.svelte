<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Item from './item.svelte';
	import * as PopoverSelect from '../popover-select/index.js';
	import type { FilterScheme } from './types.js';

	type Props = {
		filterScheme: FilterScheme;
		onAdd: (id: string) => void;
	};

	const { filterScheme, onAdd }: Props = $props();
</script>

<PopoverSelect.Root
	onSelect={(key) => {
		onAdd(key);
	}}
>
	{#snippet trigger({ props })}
		<Item variant="ghost" icon="gg:add" {...props}>
			{#snippet name()}
				<Localized id="lib-search-add-filter" />
			{/snippet}
		</Item>
	{/snippet}

	{#each Object.entries(filterScheme.filter) as [key, def] (key)}
		<PopoverSelect.Item name={def.name} icon={def.icon} value={key} />
	{/each}
</PopoverSelect.Root>
