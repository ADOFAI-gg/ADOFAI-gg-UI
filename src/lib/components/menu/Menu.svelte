<script lang="ts" module>
	import type { DropdownMenu as DropdownMenuType } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { MenuContext } from './symbols.js';
	import type { MenuContextData } from './symbols.js';

	type MenuSide = NonNullable<DropdownMenuType.ContentProps['side']>;
	type MenuAlign = Exclude<NonNullable<DropdownMenuType.ContentProps['align']>, 'center'>;

	export type MenuPlacement = MenuSide | `${MenuSide}-${MenuAlign}`;

	export type MenuProps = {
		button: Snippet<[{ trigger: Record<string, unknown> }]>;
		children: Snippet;
		placement?: MenuPlacement;
		closeOnItemClick?: boolean;
		open?: boolean;
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils/ui.js';

	let {
		button,
		children,
		placement = 'bottom',
		closeOnItemClick = true,
		open = $bindable(false)
	}: MenuProps = $props();

	const side = $derived(placement.split('-')[0] as MenuSide);
	const align = $derived(placement.split('-')[1] as MenuAlign | undefined);

	const menuContext = {
		...DropdownMenuPrimitive,
		get closeOnItemClick() {
			return closeOnItemClick;
		}
	};

	setContext<MenuContextData>(MenuContext, menuContext);
</script>

<DropdownMenuPrimitive.Root bind:open>
	<DropdownMenuPrimitive.Trigger>
		{#snippet child({ props })}
			{@render button({ trigger: props })}
		{/snippet}
	</DropdownMenuPrimitive.Trigger>

	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			{side}
			{align}
			class={cn(
				'rounded-lg bg-gg-dropdown p-2 shadow-gg-popover z-50 w-full max-w-[180px] outline-none',
				'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
				'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
			)}
		>
			{@render children()}
		</DropdownMenuPrimitive.Content>
	</DropdownMenuPrimitive.Portal>
</DropdownMenuPrimitive.Root>
