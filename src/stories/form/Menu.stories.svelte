<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte'
	import { Menu } from '$lib/index.js'

	export const meta: Meta = {
		component: Menu,
		title: 'Components/Menu'
	}
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf'
	import { Button, Icon, MenuItem } from '$lib/index.js'
</script>

<Template let:args>
	<Menu {...args}>
		<Button variant="outlined" size="md" slot="button" let:buttonRef use={[buttonRef]}>Menu</Button>

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
</Template>

<Story name="Default" args={{}} />
