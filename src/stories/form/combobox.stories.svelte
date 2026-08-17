<script lang="ts" module>
	import { Combobox } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Form/Combobox',
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let value = $state<string | null>(null);
	let multipleValue = $state<string[]>([]);

	const items = [
		{ value: 'classic', label: 'Classic', subtitle: 'The original mode', icon: 'music' },
		{ value: 'challenge', label: 'Challenge', subtitle: 'For experienced players', icon: 'bolt' },
		{ value: 'practice', label: 'Practice', disabled: true }
	];
</script>

<Story name="Single Select">
	<div class="w-80">
		<Combobox {items} bind:value placeholder="Select a mode" clearable />
		<p class="mt-2 text-sm text-white/60">Selected: {value ?? 'none'}</p>
	</div>
</Story>

<Story name="Multiple Select">
	<div class="w-80">
		<Combobox {items} bind:value={multipleValue} multiple placeholder="Select modes" />
		<p class="mt-2 text-sm text-white/60">Selected: {multipleValue.join(', ') || 'none'}</p>
	</div>
</Story>
