<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { getGlobalContext } from '$lib/utils/context.js';
	import NavMenuDivider from './NavMenuDivider.svelte';
	import NavMenuGroupHeader from './NavMenuGroupHeader.svelte';
	import NavMenuItem from './NavMenuItem.svelte';

	const context = getGlobalContext();
</script>

<NavMenuGroupHeader><Localized id="lib-language" /></NavMenuGroupHeader>
<NavMenuDivider />
{#each context?.availableLanguages ?? [] as language (language)}
	<NavMenuItem
		type="select"
		selected={context?.currentLanguage === language}
		onclick={() => {
			if (context) context.currentLanguage = language;
		}}
	>
		{context?.languageNames[language] ?? language}
	</NavMenuItem>
{/each}
