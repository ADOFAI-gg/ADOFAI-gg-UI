<script lang="ts" module>
	import { Footer } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Footer',
		component: Footer,
		args: {
			version: '(version here)'
		}
	});
</script>

<Story name="Default" />
