<script lang="ts" module>
	import { Button, Icon, Menu, MenuItem, MenuRadioGroup, MenuRadioItem } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Menu',
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let selected = $state('all');
</script>

<Story name="Actions">
	<Menu>
		{#snippet button({ trigger })}
			<Button {...trigger} rightIcon="arrow-bottom">Open menu</Button>
		{/snippet}
		<MenuItem onclick={() => {}}>
			{#snippet icon()}
				<Icon icon="pencil" />
			{/snippet}
			Edit
		</MenuItem>
		<MenuItem noIcon onclick={() => {}}>Duplicate</MenuItem>
		<MenuItem variant="danger" noIcon onclick={() => {}}>Delete</MenuItem>
	</Menu>
</Story>

<Story name="Radio Group">
	<Menu>
		{#snippet button({ trigger })}
			<Button {...trigger}>Filter: {selected}</Button>
		{/snippet}
		<MenuRadioGroup bind:value={selected}>
			<MenuRadioItem value="all">All levels</MenuRadioItem>
			<MenuRadioItem value="featured">Featured</MenuRadioItem>
			<MenuRadioItem value="archived" variant="danger">Archived</MenuRadioItem>
		</MenuRadioGroup>
	</Menu>
</Story>
