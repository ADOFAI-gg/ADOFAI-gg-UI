<script lang="ts" module>
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Loading Spinner'
	})
</script>

<Story name="Default">
	<LoadingSpinner />
</Story>
