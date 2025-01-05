<script lang="ts" module>
	import { PINInput } from '$lib/index'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({ title: 'Components/Form/PIN Input' })
</script>

<Story name="Default">
	<PINInput length={6} />
</Story>

<Story name="Disabled">
	<PINInput disabled length={6} />
</Story>

<Story name="Error">
	<PINInput error="custom:wow im error" length={6} />
</Story>
