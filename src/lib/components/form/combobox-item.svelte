<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { ComboboxItem as ComboboxOption } from './combobox.svelte';

	export type ComboboxItemProps<Value = unknown, CustomData = unknown> = {
		id: string;
		option: ComboboxOption<Value, CustomData>;
		iconTemplate?: Snippet<[ComboboxOption<Value, CustomData>]>;
		subtitleTemplate?: Snippet<[ComboboxOption<Value, CustomData>]>;
	};
</script>

<script lang="ts" generics="Value = unknown, CustomData = unknown">
	import { Combobox } from 'bits-ui';
	import Icon from '@iconify/svelte';
	import type { ComboboxItemProps as ComboboxItemPropsType } from './combobox-item.svelte';
	import { cn } from '$lib/utils/ui.js';

	let { id, option, iconTemplate, subtitleTemplate }: ComboboxItemPropsType<Value, CustomData> =
		$props();

	const icon = $derived(
		option.icon ? (option.icon.includes(':') ? option.icon : `gg:${option.icon}`) : undefined
	);
</script>

<Combobox.Item
	value={id}
	label={option.label}
	disabled={option.disabled}
	class={cn(
		'gap-2 rounded-lg px-4 py-2.5 flex cursor-pointer items-center transition-colors select-none',
		'hover:bg-white/5 data-highlighted:bg-white/15 active:bg-white/20',
		'data-selected:bg-gg-blue/10 data-disabled:pointer-events-none data-disabled:opacity-40',
		option.color === 'blue' && 'text-gg-blue'
	)}
>
	<div class="size-4.5 flex shrink-0 items-center justify-center">
		{#if iconTemplate}
			{@render iconTemplate(option)}
		{:else if icon}
			<Icon {icon} class="size-4.5" />
		{/if}
	</div>

	<div class="min-w-0 flex-1">
		<div class="text-base">{option.label}</div>
		{#if option.subtitle || subtitleTemplate}
			<div class="text-sm text-white/40">
				{#if subtitleTemplate}
					{@render subtitleTemplate(option)}
				{:else}
					{option.subtitle}
				{/if}
			</div>
		{/if}
	</div>
</Combobox.Item>
