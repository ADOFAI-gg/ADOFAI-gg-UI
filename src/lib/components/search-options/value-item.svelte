<script lang="ts">
	import { Button, Popover } from '$lib/index.js';
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Item from './item.svelte';
	import type { FilterDefinition, FilterTypeDefinition } from './types.js';
	import { untrack } from 'svelte';

	type Props = {
		definition: FilterDefinition;
		typeDefinition: FilterTypeDefinition;
		value: unknown;
		onDelete: () => void;
		onChange: (newValue: unknown) => void;
	};

	const { definition, typeDefinition, value, onDelete, onChange }: Props = $props();

	let open = $state(false);

	let editingValue = $state();

	$effect(() => {
		if (open) {
			const currentValue = untrack(() => value);
			editingValue = currentValue;
		}
	});
</script>

{#snippet valueWrapper()}
	{@render typeDefinition.value?.(value)}
{/snippet}

<Popover.Root bind:open>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Item
				icon={definition.icon}
				value={typeDefinition.value ? valueWrapper : undefined}
				{...props}
			>
				{#snippet name()}
					{definition.name}
				{/snippet}
			</Item>
		{/snippet}
	</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content>
			<form
				onsubmit={(e) => {
					e.preventDefault();
					open = false;
					onChange(editingValue);
				}}
			>
				<div>
					{@render typeDefinition.popover?.({
						value: editingValue,
						setValue: (v) => {
							editingValue = v;
						}
					})}
				</div>
				<div class="gap-2 flex">
					<Button size="md" variant="ghostLight" type="button" onclick={() => (open = false)}>
						<Localized id="lib-search-cancel" />
					</Button>
					<Button
						size="md"
						type="button"
						variant="ghostDanger"
						onclick={() => {
							open = false;
							onDelete?.();
						}}
					>
						<Localized id="lib-search-remove-filter" />
					</Button>
					<Button size="md">
						<Localized id="lib-search-apply" />
					</Button>
				</div>
			</form>
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>
