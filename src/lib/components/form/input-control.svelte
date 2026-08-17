<script lang="ts" module>
	import type { HTMLInputAttributes } from 'svelte/elements';

	export type InputControlProps = Omit<HTMLInputAttributes, 'children' | 'value'> & {
		value?: string | number;
		meltElement?: unknown;
	};
</script>

<script lang="ts">
	let {
		value = $bindable<string | number>(''),
		placeholder,
		meltElement: _meltElement,
		class: className,
		...restProps
	}: InputControlProps = $props();

	void _meltElement;
</script>

<div class="min-h-8 border-white/40 flex h-full border-b">
	<input
		bind:value
		{placeholder}
		class={`px-0 py-2 text-base font-light placeholder:text-white/60 w-full flex-grow bg-transparent outline-none ${className ?? ''}`}
		{...restProps}
	/>
</div>
