<script lang="ts" context="module">
	import { Button } from '$lib/index.js'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	export const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button
	})
</script>

{#snippet template(args: any)}
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
{/snippet}

<Story name="Primary" args={{ variant: 'primary' }} children={template} />

<Story name="Danger" args={{ variant: 'danger' }} children={template} />

<Story name="Light Ghost" args={{ variant: 'ghost-light' }} children={template} />

<Story name="Dark Ghost" args={{ variant: 'ghost-dark' }} children={template} />

<Story name="Outlined" args={{ variant: 'outlined' }} children={template} />

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
