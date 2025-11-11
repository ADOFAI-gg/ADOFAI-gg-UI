<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import Icon from '@iconify/svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';

	export type SearchInputProps = {
		containerClass?: string;
	} & HTMLInputAttributes;
</script>

<script lang="ts">
	const { containerClass, class: inputClass, ...rest }: SearchInputProps = $props();
</script>

<div
	class={cn(
		'px-4 gap-3 inset-ring-white/20 has-[input:focus-within]:inset-ring-white flex flex-row-reverse items-center rounded-full inset-ring-2 transition',
		containerClass
	)}
>
	<input
		class={cn(
			'p-0 py-3 peer placeholder:text-white/80 grow border-none bg-transparent ring-0 outline-none',
			inputClass
		)}
		{...rest}
	/>
	<Icon icon="gg:search2" class="size-6 opacity-60 transition peer-focus-within:opacity-100" />
</div>
