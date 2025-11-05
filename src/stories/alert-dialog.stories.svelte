<script lang="ts" module>
	import { AlertDialog, Button } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Alert Dialog'
	});
</script>

<Story name="Default">
	<AlertDialog.Root>
		<AlertDialog.Trigger>
			{#snippet child({ props })}
				<Button {...props}>Click me!</Button>
			{/snippet}
		</AlertDialog.Trigger>

		<AlertDialog.Portal>
			<AlertDialog.Overlay />
			<AlertDialog.Content>
				<AlertDialog.TitleArea>
					<AlertDialog.Title>Are you sure?</AlertDialog.Title>
					<AlertDialog.Description>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quibusdam beatae velit
						corrupti quae quidem porro quaerat culpa, ad praesentium debitis in unde, quisquam
						architecto. Delectus id assumenda nihil hic?
					</AlertDialog.Description>
				</AlertDialog.TitleArea>
				<AlertDialog.ActionsArea>
					{#snippet left()}
						<AlertDialog.Cancel>
							{#snippet child({ props })}
								<Button {...props} variant="ghostLight" transparent size="sm">Cancel</Button>
							{/snippet}
						</AlertDialog.Cancel>
					{/snippet}
					{#snippet right()}
						<AlertDialog.Action>
							{#snippet child({ props })}
								<Button {...props} variant="danger" size="sm">OK</Button>
							{/snippet}
						</AlertDialog.Action>
					{/snippet}
				</AlertDialog.ActionsArea>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
</Story>
