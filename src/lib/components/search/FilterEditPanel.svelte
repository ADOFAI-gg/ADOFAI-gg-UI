<script lang="ts">
	import type { SearchFilterScheme } from '$lib/types'
	import Translation from '$lib/utils/Translation.svelte'
	import Button from '../Button.svelte'
	import FormField from '../form/FormField.svelte'
	import InputControl from '../form/InputControl.svelte'

	interface Props {
		scheme: SearchFilterScheme
		value: unknown
		close: () => void
		onRemove: () => void
		onSave: (value: unknown) => void
	}

	const { scheme, close, onRemove, onSave, value: intiialValue }: Props = $props()

	let value = $state(intiialValue)

	$effect(() => {
		value = intiialValue
	})
</script>

<form
	class="filter-edit-panel"
	onsubmit={(e) => {
		e.preventDefault()
		onSave(value)
	}}
>
	{#if scheme.type == 'string'}
		<FormField label={scheme.label}>
			<InputControl bind:value={value as string} />
		</FormField>
	{/if}

	<div class="actions">
		<Button size="md" type="button" variant="ghost-light" on:click={close}>
			<Translation key="ui-search:cancel" />
		</Button>
		<Button size="md" type="button" variant="ghost-danger" on:click={onRemove}>
			<Translation key="ui-search:remove-filter" />
		</Button>
		<Button size="md" type="submit">
			<Translation key="ui-search:apply" />
		</Button>
	</div>
</form>

<style lang="scss">
	@import '../../stylesheets/system/colors';

	.filter-edit-panel {
		max-width: 240px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.actions {
		display: flex;
		gap: 8px;

		justify-content: flex-end;
	}
</style>
