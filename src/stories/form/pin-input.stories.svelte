<script lang="ts" module>
	import { PINInput } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Form/PIN Input',
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let value = $state<string[]>(['1', '2', '', '']);
	let completed = $state('');
</script>

<Story name="Default">
	<div class="w-full">
		<PINInput length={4} bind:value onfinish={(result) => (completed = result)} />
		<p class="mt-3 text-sm text-white/60 text-center">
			Completed value: {completed || 'type four digits'}
		</p>
	</div>
</Story>

<Story name="With Error">
	<PINInput length={6} error="lib-search-error-min-value" />
</Story>
