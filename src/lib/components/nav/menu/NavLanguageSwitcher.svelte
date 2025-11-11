<script lang="ts">
	import Translation from '$lib/utils/Translation.svelte'
	import { availableLanguages, getGlobalContext } from '$lib/index'
	import NavMenuDivider from './NavMenuDivider.svelte'
	import NavMenuGroupHeader from './NavMenuGroupHeader.svelte'
	import NavMenuItem from './NavMenuItem.svelte'
	import { onMount } from 'svelte'
	import { getNavMenuGroupContext } from './state'

	const { language, setLanguage } = getGlobalContext()

	const group = getNavMenuGroupContext()

	onMount(() => {
		group.highlighted.set(
			Math.max(
				0,
				availableLanguages.findIndex((x) => x.code === $language)
			)
		)
	})
</script>

<NavMenuGroupHeader>
	<Translation key="ui-common:language" />
</NavMenuGroupHeader>
<NavMenuDivider />
{#each availableLanguages as lang}
	<NavMenuItem
		type="select"
		onclick={() => {
			setLanguage(lang.code)
		}}
		selected={$language === lang.code}
	>
		{lang.name}
	</NavMenuItem>
{/each}
