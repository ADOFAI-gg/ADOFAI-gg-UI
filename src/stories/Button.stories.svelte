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
			<div class="style-name">Default</div>
			<div class="button-row">
				<Button size="lg" {...args} disabled>Disabled</Button>
				<Button size="lg" {...args}>Large</Button>
				<Button size="md" {...args}>Medium</Button>
				<Button size="sm" {...args}>Small</Button>
			</div>
		</section>

		<section>
			<div class="style-name">Left Icon</div>
			<div class="button-row">
				<Button size="lg" {...args} disabled leftIcon="profile">Disabled</Button>
				<Button size="lg" {...args} leftIcon="profile">Large</Button>
				<Button size="md" {...args} leftIcon="profile">Medium</Button>
				<Button size="sm" {...args} leftIcon="profile">Small</Button>
			</div>
		</section>

		<section>
			<div class="style-name">Right Icon</div>
			<div class="button-row">
				<Button size="lg" {...args} disabled rightIcon="profile">Disabled</Button>
				<Button size="lg" {...args} rightIcon="profile">Large</Button>
				<Button size="md" {...args} rightIcon="profile">Medium</Button>
				<Button size="sm" {...args} rightIcon="profile">Small</Button>
			</div>
		</section>

		<section>
			<div class="style-name">Icon Only</div>
			<div class="button-row">
				<Button size="lg" {...args} disabled iconOnly leftIcon="profile" />
				<Button size="lg" {...args} iconOnly leftIcon="profile" />
				<Button size="md" {...args} iconOnly leftIcon="profile" />
				<Button size="sm" {...args} iconOnly leftIcon="profile" />
			</div>
		</section>
	</div>
</Template>

<Story name="Primary" args={{ variant: 'primary' }} />

<Story name="Danger" args={{ variant: 'danger' }} />

<Story name="Light Ghost" args={{ variant: 'ghost-light' }} />

<Story name="Dark Ghost" args={{ variant: 'ghost-dark' }} />

<Story name="Outlined" args={{ variant: 'outlined' }} />

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
