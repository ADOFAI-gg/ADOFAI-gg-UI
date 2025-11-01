<script lang="ts" module>
	import { LoadingSpinner } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Loading Spinner',
		component: LoadingSpinner,
		tags: ['autodocs']
	});
</script>

<Story name="Default" />
