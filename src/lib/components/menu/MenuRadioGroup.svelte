<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type MenuRadioGroupProps = {
		value?: string | null;
		defaultValue?: string;
		onchange?: (value: string | null) => void;
		children: Snippet;
	};
</script>

<script lang="ts">
	import { DropdownMenu } from 'bits-ui';
	import { getContext, setContext } from 'svelte';
	import { MenuContext, MenuRadioContext, type MenuContextData } from './symbols.js';

	let { value = $bindable(null), defaultValue, onchange, children }: MenuRadioGroupProps = $props();

	const menu = getContext<MenuContextData>(MenuContext);
	setContext(MenuRadioContext, menu);

	let selectedValue = $state(value ?? defaultValue ?? '');
	let previousValue = $state(value);

	$effect(() => {
		if (value === previousValue) return;

		selectedValue = value ?? '';
		previousValue = value;
	});

	function handleValueChange(nextValue: string) {
		selectedValue = nextValue;
		value = nextValue;
		onchange?.(nextValue);
	}
</script>

<DropdownMenu.RadioGroup bind:value={selectedValue} onValueChange={handleValueChange}>
	{@render children()}
</DropdownMenu.RadioGroup>
