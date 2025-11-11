<script lang="ts" module>
	import { SectionTitle, SectionTitleLink } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Section Title'
	});
</script>

<Story name="Default">
	<SectionTitle>Title</SectionTitle>
</Story>

<Story name="With Link">
	<SectionTitle>
		Title
		{#snippet link()}
			<SectionTitleLink icon="gg:chevronright">Link</SectionTitleLink>
		{/snippet}
	</SectionTitle>
</Story>
