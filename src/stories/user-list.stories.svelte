<script lang="ts" module>
	import { UserList } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ganjangFactory from './assets/ganjangfactory.png';

	const { Story } = defineMeta({
		title: 'Components/User List',
		tags: ['autodocs']
	});
</script>

<Story name="Grouped Users">
	<UserList
		items={[
			{
				type: 'user',
				data: {
					displayName: 'GanjangFactory',
					avatarURL: ganjangFactory,
					isAdmin: true
				},
				href: '/users/ganjangfactory'
			},
			{
				type: 'group',
				name: 'Moderators',
				data: [
					{
						type: 'user',
						data: {
							displayName: 'Player One',
							avatarURL: ganjangFactory,
							isAdmin: false
						}
					},
					{
						type: 'user',
						data: {
							displayName: 'Player Two',
							avatarURL: null,
							isAdmin: false
						}
					}
				]
			}
		]}
	/>
</Story>
