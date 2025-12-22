<script lang="ts" module>
	export type ItemProps = {
		name: string;
		icon?: string;
		value: string;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	import { Command } from 'bits-ui';
	import { getContext } from 'svelte';
	import { PopoverSelectContext, type PopoverSelectContextType } from './context.js';
	import Icon from '@iconify/svelte';

	const { name, value, icon }: ItemProps = $props();

	const { select } = getContext<PopoverSelectContextType>(PopoverSelectContext);
</script>

<Command.Item
	class={cn(
		'rounded-lg gap-2 flex cursor-pointer items-center select-none',
		'data-selected:bg-white/5',
		'hover:bg-white/5! active:bg-white/10! px-4 py-2.5 transition-colors'
	)}
	data-name={name}
	{value}
	onSelect={() => {
		select(value);
	}}
>
	<div class="size-4.5">
		{#if icon}
			<Icon {icon} class="size-4.5" />
		{/if}
	</div>
	<div>{name}</div>
</Command.Item>
