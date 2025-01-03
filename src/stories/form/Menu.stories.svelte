<script lang="ts" context="module">
	import { Button, Icon, Menu, MenuItem } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		component: Menu,
		title: 'Components/Menu'
	})
</script>

{#snippet template(args: any)}
	<Menu {...args}>
		<Button variant="outlined" size="md" slot="button" let:trigger meltElement={trigger}>
			Menu
		</Button>

		<MenuItem>
			<Icon slot="icon" icon="pencil" size={16} alt="icon" />
			Item 1
		</MenuItem>
		<MenuItem>Item 2</MenuItem>
		<MenuItem variant="danger">
			<Icon slot="icon" icon="trash" size={16} alt="icon" />
			Item 3
		</MenuItem>
		<MenuItem noIcon>Item 4 - No Icon Space</MenuItem>
	</Menu>
{/snippet}

<Story name="Default" args={{}} children={template} />
