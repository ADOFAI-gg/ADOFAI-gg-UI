<script lang="ts" module>
	import {
		NavLanguageSwitcher,
		NavMenu,
		NavMenuDivider,
		NavMenuGroup,
		NavMenuGroupHeader,
		NavMenuItem
	} from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Nav Menu',
		tags: ['autodocs']
	});
</script>

<Story name="Nested Groups">
	<NavMenu>
		<NavMenuGroup id="default">
			<NavMenuItem switchGroup="settings">Settings</NavMenuItem>
			<NavMenuItem link href="/levels">Open levels</NavMenuItem>
			<NavMenuItem type="danger" onclick={() => {}}>Sign out</NavMenuItem>
		</NavMenuGroup>
		<NavMenuGroup id="settings">
			<NavMenuGroupHeader>Settings</NavMenuGroupHeader>
			<NavMenuDivider />
			<NavMenuItem selected onclick={() => {}}>Notifications</NavMenuItem>
			<NavMenuItem onclick={() => {}}>Privacy</NavMenuItem>
		</NavMenuGroup>
	</NavMenu>
</Story>

<Story name="Language Switcher">
	<NavMenu>
		<NavMenuGroup id="default">
			<NavLanguageSwitcher />
		</NavMenuGroup>
	</NavMenu>
</Story>
