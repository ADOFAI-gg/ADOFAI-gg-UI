<script lang="ts" module>
	import type { CommandItemProps } from 'bits-ui';
	import type { Snippet } from 'svelte';

	export type SelectOption<Value = unknown, CustomData = unknown> = {
		value: Value;
		label: string;
		subtitle?: string;
		icon?: string;
		disabled?: boolean;
		customData?: CustomData;
		color?: 'default' | 'blue';
	};

	export type ComboboxItemProps<Value = unknown, CustomData = unknown> = Omit<
		CommandItemProps,
		'children' | 'child' | 'value' | 'disabled'
	> & {
		option: SelectOption<Value, CustomData>;
		select?: boolean;
		/** Legacy Melt UI option builder; Bits UI handles selection internally. */
		meltElement?: unknown;
		subtitleTemplate?: Snippet<[SelectOption<Value, CustomData>]>;
		iconTemplate?: Snippet<[SelectOption<Value, CustomData>]>;
	};
</script>

<script lang="ts" generics="Value = unknown, CustomData = unknown">
	import { Command } from 'bits-ui';
	import Icon from '@iconify/svelte';
	import { cn } from '$lib/utils/ui.js';
	import type { ComboboxItemProps as ComboboxItemComponentProps } from './ComboboxItem.svelte';

	let {
		option,
		select = false,
		meltElement: _meltElement,
		subtitleTemplate,
		iconTemplate,
		class: className,
		...restProps
	}: ComboboxItemComponentProps<Value, CustomData> = $props();

	void _meltElement;

	const icon = $derived(
		option.icon ? (option.icon.includes(':') ? option.icon : `gg:${option.icon}`) : undefined
	);
</script>

<Command.Item
	{...restProps}
	value={String(option.value)}
	disabled={option.disabled}
	class={cn(
		'gap-2 rounded-lg px-4 py-2.5 flex cursor-pointer items-center transition-colors select-none',
		'data-highlighted:bg-white/15 data-disabled:pointer-events-none data-disabled:opacity-40',
		select
			? 'data-selected:bg-gg-blue/10 active:bg-gg-blue/20'
			: 'data-selected:bg-white/10 active:bg-white/20',
		option.color === 'blue' && 'text-gg-blue',
		className
	)}
>
	<div class="size-4 flex shrink-0 items-center justify-center">
		{#if iconTemplate}
			{@render iconTemplate(option)}
		{:else if icon}
			<Icon {icon} class="size-4" aria-hidden="true" />
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
</Command.Item>
