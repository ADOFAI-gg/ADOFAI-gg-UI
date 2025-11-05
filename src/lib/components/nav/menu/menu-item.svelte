<script lang="ts">
	import { Command } from 'bits-ui';
	import type { MenuItemProps } from './props.js';
	import { cn } from '$lib/utils/ui.js';
	import { menuItem } from './variants.js';
	import Icon from '@iconify/svelte';

	const { class: className, icon, children, variant, ...props }: MenuItemProps = $props();
</script>

<Command.Item {...props} class={cn(menuItem({ variant }), className)}>
	<div>
		{@render children?.()}
	</div>
	{#if icon}
		<Icon {icon} class="size-4.5" />
	{/if}
</Command.Item>
