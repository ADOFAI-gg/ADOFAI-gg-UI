<script lang="ts" module>
	import { FormField, FormHint, FormHintArea, InputControl } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Form/Field',
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<div class="w-80">
		<FormField
			label="Display name"
			subtitle="Shown on your public profile"
			required
			helpText="Use up to 32 characters."
		>
			<InputControl placeholder="GanjangFactory" />
		</FormField>
	</div>
</Story>

<Story name="With Hints">
	<div class="w-80">
		<FormField label="Email">
			<InputControl type="email" value="not-an-email" />
			{#snippet hints()}
				<FormHintArea>
					<FormHint type="hint">We will never share your email.</FormHint>
					<FormHint type="error">Please enter a valid email address.</FormHint>
				</FormHintArea>
			{/snippet}
		</FormField>
	</div>
</Story>

<Story name="Horizontal">
	<div class="w-80">
		<FormField horizontal label="Age">
			<InputControl type="number" value={21} />
		</FormField>
	</div>
</Story>
