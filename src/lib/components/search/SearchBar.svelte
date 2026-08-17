<script lang="ts" module>
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils/ui.js';
	import Icon from '@iconify/svelte';

	export type SearchBarProps = Omit<HTMLInputAttributes, 'value'> & {
		containerClass?: string;
		value?: string;
	};
</script>

<script lang="ts">
	import { getFluentContext } from '@nubolab-ffwd/svelte-fluent';
	import { getGlobalContext } from '$lib/utils/context.js';
	import { translateKey } from '$lib/legacy/translation.js';
	import { writable } from 'svelte/store';

	let {
		containerClass,
		class: inputClass,
		placeholder,
		value = $bindable(''),
		...rest
	}: SearchBarProps = $props();

	const { localize } = getFluentContext();
	const language = getGlobalContext()?.language ?? writable('en');
	const isLegacyKey = (value: string) => value.includes(':');
	const translatedPlaceholder = $derived(
		placeholder
			? isLegacyKey(placeholder)
				? translateKey($language, placeholder, {})
				: localize(placeholder)
			: undefined
	);
</script>

<div
	class={cn(
		'px-4 gap-3 inset-ring-white/20 has-[input:focus-within]:inset-ring-white flex flex-row-reverse items-center rounded-full inset-ring-2 transition',
		containerClass
	)}
>
	<input
		bind:value
		placeholder={translatedPlaceholder}
		class={cn(
			'p-0 py-3 peer placeholder:text-white/80 grow border-none bg-transparent ring-0 outline-none',
			inputClass
		)}
		{...rest}
	/>
	<Icon icon="gg:search2" class="size-6 opacity-60 transition peer-focus-within:opacity-100" />
</div>
