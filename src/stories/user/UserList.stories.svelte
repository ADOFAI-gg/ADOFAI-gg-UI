<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import { dummyAdminUser, dummyUser } from '../dummyData'
	import UserList from '$lib/components/user/UserList.svelte'

	const { Story } = defineMeta({
		title: 'Components/User/User List'
	})
</script>

<Story name="Default">
	<UserList
		items={[
			{ type: 'user', data: dummyUser },
			{ type: 'user', data: dummyAdminUser },
			{ type: 'user', data: dummyUser },
			{ type: 'user', data: dummyUser },
			{
				type: 'group',
				name: 'Team GanjangFactory',
				data: [
					{ type: 'user', data: dummyUser },
					{
						type: 'group',
						name: 'The PPAPDanceMaster',
						data: [
							{ type: 'user', data: dummyUser },
							{ type: 'user', data: dummyAdminUser },
							{ type: 'user', data: dummyUser }
						]
					}
				]
			}
		]}
	/>
</Story>
