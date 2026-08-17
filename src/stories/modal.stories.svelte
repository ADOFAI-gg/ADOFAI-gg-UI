<script lang="ts" module>
	import { Button, Modal, ModalActions, ModalTitle } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Modal',
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let controlledOpen = $state(true);
</script>

<Story name="Default">
	<Modal>
		{#snippet trigger({ trigger })}
			<Button {...trigger}>Open modal</Button>
		{/snippet}
		{#snippet children({ close })}
			<ModalTitle>
				Delete level?
				{#snippet subtitle()}
					This action cannot be undone.
				{/snippet}
			</ModalTitle>
			<p class="text-white/70 text-center">The level and all of its metadata will be removed.</p>
			<ModalActions>
				{#snippet left()}
					<Button variant="ghostLight" onclick={close}>Cancel</Button>
				{/snippet}
				{#snippet right()}
					<Button variant="ghostDanger" onclick={close}>Delete</Button>
				{/snippet}
			</ModalActions>
		{/snippet}
	</Modal>
</Story>

<Story name="Controlled Open">
	<Modal bind:open={controlledOpen}>
		{#snippet children({ close })}
			<ModalTitle>Controlled modal</ModalTitle>
			<p class="text-white/70 text-center">This story starts open and can be closed.</p>
			<Button onclick={close}>Close</Button>
		{/snippet}
	</Modal>
</Story>
