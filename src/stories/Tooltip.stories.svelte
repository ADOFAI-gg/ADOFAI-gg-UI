<script lang="ts" module>
	import TooltipDescription from '$lib/components/TooltipDescription.svelte'
	import TooltipTitle from '$lib/components/TooltipTitle.svelte'
	import { Button, Tooltip } from '$lib/index'
	import { melt } from '@melt-ui/svelte'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Tooltip'
	})
</script>

<Story name="Default">
	<Tooltip placement="bottom-start">
		{#snippet trigger({ trigger })}
			<Button meltElement={trigger}>Hover this</Button>
		{/snippet}

		<TooltipTitle>Title</TooltipTitle>
		<TooltipDescription>Description</TooltipDescription>
	</Tooltip>
</Story>
