<script lang="ts" module>
	import { SearchInput } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Search/Search Input',
		component: SearchInput,
		args: {
			placeholder: 'Type something?!?!?!'
		}
	});
</script>

<Story name="Default" />
