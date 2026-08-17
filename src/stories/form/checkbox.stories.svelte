<script lang="ts" module>
	import { Checkbox, LabeledCheckbox } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Form/Checkbox',
		tags: ['autodocs']
	});
</script>

<Story name="Sizes">
	<div class="gap-4 flex items-center">
		<Checkbox size="sm" aria-label="Small checkbox" />
		<Checkbox size="md" checked aria-label="Medium checkbox" />
		<Checkbox size="lg" indeterminate aria-label="Large checkbox" />
	</div>
</Story>

<Story name="Labeled and Required">
	<LabeledCheckbox checked required>Accept the terms</LabeledCheckbox>
</Story>
