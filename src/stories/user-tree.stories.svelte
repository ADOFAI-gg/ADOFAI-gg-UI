<script lang="ts" module>
	import { UserTree } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ganjangfactory from './assets/ganjangfactory.png';

	const { Story } = defineMeta({
		title: 'Components/User Tree'
	});
</script>

<Story name="Default">
	<UserTree.Root>
		<UserTree.Item
			user={{
				name: 'GanjangFactory',
				avatar: ganjangfactory
			}}
		/>
		<UserTree.Item
			user={{
				name: 'GanjangFactory 2',
				avatar: ganjangfactory
			}}
		/>
		<UserTree.Item
			user={{
				name: 'GanjangFactory 3',
				avatar: ganjangfactory
			}}
		/>

		<UserTree.Group name="Group" open>
			<UserTree.Item
				user={{
					name: 'GanjangFactory 4',
					avatar: ganjangfactory
				}}
			/>
			<UserTree.Item
				user={{
					name: 'GanjangFactory 5',
					avatar: ganjangfactory
				}}
			/>
			<UserTree.Item
				user={{
					name: 'GanjangFactory 6',
					avatar: ganjangfactory
				}}
			/>
		</UserTree.Group>

		<UserTree.Group name="Group 2">
			<UserTree.Item
				user={{
					name: 'GanjangFactory 7',
					avatar: ganjangfactory
				}}
			/>
			<UserTree.Item
				user={{
					name: 'GanjangFactory 8',
					avatar: ganjangfactory
				}}
			/>
			<UserTree.Item
				user={{
					name: 'GanjangFactory 9',
					avatar: ganjangfactory
				}}
			/>
			<UserTree.Group name="Group 3">
				<UserTree.Item
					user={{
						name: 'GanjangFactory 10',
						avatar: ganjangfactory
					}}
				/>
				<UserTree.Item
					user={{
						name: 'GanjangFactory 11',
						avatar: ganjangfactory
					}}
				/>
				<UserTree.Item
					user={{
						name: 'GanjangFactory 12',
						avatar: ganjangfactory
					}}
				/>
			</UserTree.Group>
		</UserTree.Group>

		<UserTree.Item
			user={{
				name: 'GanjangFactory 13',
				avatar: ganjangfactory
			}}
		/>
	</UserTree.Root>
</Story>
