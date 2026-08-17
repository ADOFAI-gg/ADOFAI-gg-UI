<script lang="ts" module>
	import { Button, Tooltip, TooltipDescription, TooltipTitle } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Tooltip'
	});
</script>

<Story name="Default">
	<Tooltip>
		{#snippet trigger({ props })}
			<Button {...props}>Hover me!</Button>
		{/snippet}

		{#snippet title()}
			Title
		{/snippet}

		Hello I'm a tooltip content!
	</Tooltip>
</Story>

<Story name="Compatibility Parts">
	<Tooltip>
		{#snippet trigger({ props })}
			<Button {...props}>Hover for details</Button>
		{/snippet}

		{#snippet title()}
			<TooltipTitle>Legacy-compatible title</TooltipTitle>
		{/snippet}

		<TooltipDescription>Title and description can be composed explicitly.</TooltipDescription>
	</Tooltip>
</Story>
