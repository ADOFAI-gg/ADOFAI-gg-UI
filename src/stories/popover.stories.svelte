<script lang="ts" module>
	import { Button, Popover } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Popover'
	});
</script>

<Story name="Default">
	<Popover.Root>
		<Popover.Trigger>
			{#snippet child({ props })}
				<Button {...props}>Click me!</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Content>야호</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
</Story>

<Story name="With Overlay">
	<Popover.Root>
		<Popover.Trigger>
			{#snippet child({ props })}
				<Button {...props}>Click me!</Button>
			{/snippet}
		</Popover.Trigger>
		<Popover.Portal>
			<Popover.Overlay />
			<Popover.Content>야호</Popover.Content>
		</Popover.Portal>
	</Popover.Root>
</Story>
