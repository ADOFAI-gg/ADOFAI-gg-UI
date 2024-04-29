<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte'
	import { Template, Story } from '@storybook/addon-svelte-csf'
	import { Button } from '$lib/index.js'

	export const meta: Meta = {
		title: 'Components/Button',
		component: Button
	}
</script>

<Template let:args>
	<div class="buttons">
		<section>
			<div class="style-name">Primary</div>
			<div class="button-row">
				<Button size="lg" style="primary" {...args} disabled>Disabled</Button>
				<Button size="lg" style="primary" {...args}>Large</Button>
				<Button size="md" style="primary" {...args}>Medium</Button>
				<Button size="sm" style="primary" {...args}>Small</Button>
			</div>
		</section>

		<section>
			<div class="style-name">Danger</div>
			<div class="button-row">
				<Button size="lg" style="danger" {...args} disabled>Disabled</Button>
				<Button size="lg" style="danger" {...args}>Large</Button>
				<Button size="md" style="danger" {...args}>Medium</Button>
				<Button size="sm" style="danger" {...args}>Small</Button>
			</div>
		</section>

		<section>
			<div class="style-name">Ghost/Light</div>
			<div class="button-row">
				<Button size="lg" style="ghost-light" {...args} disabled>Disabled</Button>
				<Button size="lg" style="ghost-light" {...args}>Large</Button>
				<Button size="md" style="ghost-light" {...args}>Medium</Button>
				<Button size="sm" style="ghost-light" {...args}>Small</Button>
			</div>
		</section>

		<section>
			<div class="style-name">Ghost/Dark</div>
			<div class="button-row">
				<Button size="lg" style="ghost-dark" {...args} disabled>Disabled</Button>
				<Button size="lg" style="ghost-dark" {...args}>Large</Button>
				<Button size="md" style="ghost-dark" {...args}>Medium</Button>
				<Button size="sm" style="ghost-dark" {...args}>Small</Button>
			</div>
		</section>

		<section>
			<div class="style-name">Outlined</div>
			<div class="button-row">
				<Button size="lg" style="outlined" {...args} disabled>Disabled</Button>
				<Button size="lg" style="outlined" {...args}>Large</Button>
				<Button size="md" style="outlined" {...args}>Medium</Button>
				<Button size="sm" style="outlined" {...args}>Small</Button>
			</div>
		</section>
	</div>
</Template>

<Story name="Default" />

<Story name="Left Icon" />

<Story name="Right Icon" />

<Story name="Icon Only" />

<style lang="scss">
	.style-name {
		margin-bottom: 8px;
	}

	.button-row {
		display: flex;
		align-items: center;

		gap: 16px;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
</style>
