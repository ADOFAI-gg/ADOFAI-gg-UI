<script module lang="ts">
	import { Combobox } from '$lib/index'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Form/Controls/Combobox'
	})
</script>

<Story name="Default">
	<Combobox
		items={[
			{
				value: 'sans',
				label: 'Hello',
				subtitle: 'Sans',
				icon: 'add',
				color: 'blue'
			},
			{
				value: 'wow',
				label: '샌즈',
				subtitle: '야호!!!!!',
				icon: 'steam'
			}
		]}
		placeholder="wow sans"
	/>
</Story>

<Story name="Loading">
	<Combobox items={[]} placeholder="wow sans" loading />
</Story>
