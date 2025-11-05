<script lang="ts" module>
	import { Dialog, Button } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Dialog'
	});
</script>

<Story name="Default">
	<Dialog.Root>
		<Dialog.Trigger>
			{#snippet child({ props })}
				<Button {...props}>Click me!</Button>
			{/snippet}
		</Dialog.Trigger>

		<Dialog.Portal>
			<Dialog.Overlay />
			<Dialog.Content>
				<Dialog.TitleArea>
					<Dialog.Title>WOOOOW I'm Dialog!!</Dialog.Title>
					<Dialog.Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quibusdam beatae velit
						corrupti quae quidem porro quaerat culpa, ad praesentium debitis in unde, quisquam
						architecto. Delectus id assumenda nihil hic?
					</Dialog.Description>
				</Dialog.TitleArea>
				<Dialog.ActionsArea>
					{#snippet left()}
						<Dialog.Close>
							{#snippet child({ props })}
								<Button {...props} variant="ghostLight" transparent size="sm">Close</Button>
							{/snippet}
						</Dialog.Close>
					{/snippet}
					{#snippet right()}
						<Dialog.Close>
							{#snippet child({ props })}
								<Button {...props} size="sm">OK</Button>
							{/snippet}
						</Dialog.Close>
					{/snippet}
				</Dialog.ActionsArea>
			</Dialog.Content>
		</Dialog.Portal>
	</Dialog.Root>
</Story>
