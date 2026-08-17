<script lang="ts" module>
	import { Table } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Table'
	});
</script>

<Story name="Default">
	<Table.Root class="w-full">
		<Table.Header>
			<Table.Row>
				<Table.Head>Head A</Table.Head>
				<Table.Head>Head B</Table.Head>
				<Table.Head>Head C</Table.Head>
				<Table.Head>Head D</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each Array.from({ length: 30 }) as i (i)}
				<Table.Row>
					<Table.Cell>Item {i}</Table.Cell>
					<Table.Cell>Hello</Table.Cell>
					<Table.Cell>Hello</Table.Cell>
					<Table.Cell>Hello</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</Story>
