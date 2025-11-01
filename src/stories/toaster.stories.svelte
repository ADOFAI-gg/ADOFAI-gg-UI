<script lang="ts" module>
	import { Button, toast, Toaster } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Misc/Toaster'
	});
</script>

<Story name="Default">
	<Toaster />

	<Button
		size="sm"
		onclick={() => {
			toast("I'm a generic toast.");
		}}
	>
		Generic
	</Button>

	<Button
		size="sm"
		onclick={() => {
			toast.success("I'm a success toast.");
		}}
	>
		Success
	</Button>

	<Button
		size="sm"
		onclick={() => {
			toast.warning("I'm a warning toast.");
		}}
	>
		Warning
	</Button>

	<Button
		size="sm"
		onclick={() => {
			toast.error("I'm a error toast.");
		}}
	>
		Error
	</Button>

	<Button
		size="sm"
		onclick={() => {
			toast.info("I'm a info toast.");
		}}
	>
		Info
	</Button>
</Story>
