<script lang="ts" module>
	import { Nav } from '$lib/index'
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import { dummyAdminUser, dummyUser } from '../dummyData'
	import NavMenuGroup from '$lib/components/nav/menu/NavMenuGroup.svelte'
	import NavMenuItem from '$lib/components/nav/menu/NavMenuItem.svelte'
	import Translation from '$lib/utils/Translation.svelte'
	import NavLanguageSwitcher from '$lib/components/nav/menu/NavLanguageSwitcher.svelte'

	const { Story } = defineMeta({ title: 'Components/Nav' })
</script>

{#snippet menu()}
	<NavMenuGroup id="default">
		<NavMenuItem switchGroup="language">
			<Translation key="ui-common:language" />
		</NavMenuItem>
		<NavMenuItem link href="https://adofai.gg" target="_blank" rel="noreferrer"
			>Something</NavMenuItem
		>
		<NavMenuItem type="danger">
			<Translation key="ui-common:sign-out" />
		</NavMenuItem>
	</NavMenuGroup>
	<NavMenuGroup id="language">
		<NavLanguageSwitcher />
	</NavMenuGroup>
{/snippet}

<Story name="Default">
	<Nav user={null} {menu}></Nav>
</Story>

<Story name="Signed In">
	<Nav user={dummyUser} {menu}></Nav>
</Story>

<Story name="Signed In as Admin">
	<Nav user={dummyAdminUser} {menu}></Nav>
</Story>
