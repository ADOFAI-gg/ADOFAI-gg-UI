<script lang="ts" module>
	import { Panel } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Panel',
		component: Panel,
		tags: ['autodocs'],
		args: {
			title,
			children
		}
	});
</script>

{#snippet title()}
	Panel Title
{/snippet}

{#snippet children()}
	Panel Content
{/snippet}

<Story name="Default" args={{ variant: 'default' }} />
<Story name="Warning" args={{ variant: 'warning' }} />
<Story name="Danger" args={{ variant: 'danger' }} />
