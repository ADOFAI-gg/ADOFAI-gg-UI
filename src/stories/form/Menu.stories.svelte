<script lang="ts" context="module">
	import MenuRadioItem from '$lib/components/menu/MenuRadioItem.svelte'
	import { Button, Icon, Menu, MenuRadioGroup, MenuItem } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		component: Menu,
		title: 'Components/Menu'
	})
</script>

{#snippet template(args: any)}
	<Menu {...args}>
		{#snippet button({ trigger })}
			<Button variant="outlined" size="md" meltElement={trigger}>Menu</Button>
		{/snippet}

		<MenuItem>
			{#snippet icon()}
				<Icon icon="pencil" size={16} alt="icon" />
			{/snippet}
			Item 1
		</MenuItem>
		<MenuItem>Item 2</MenuItem>
		<MenuItem variant="danger">
			{#snippet icon()}
				<Icon icon="trash" size={16} alt="icon" />
			{/snippet}
			Item 3
		</MenuItem>
		<MenuItem noIcon>Item 4 - No Icon Space</MenuItem>
	</Menu>
{/snippet}

<Story name="Default" args={{}} children={template} />

<Story name="Radio">
	<Menu>
		{#snippet button({ trigger })}
			<Button variant="outlined" size="md" meltElement={trigger}>Menu</Button>
		{/snippet}

		<MenuRadioGroup>
			<MenuRadioItem value="a">A</MenuRadioItem>
			<MenuRadioItem value="b">B</MenuRadioItem>
			<MenuRadioItem value="c">C</MenuRadioItem>
			<MenuRadioItem value="d">D</MenuRadioItem>
		</MenuRadioGroup>
	</Menu>
</Story>
