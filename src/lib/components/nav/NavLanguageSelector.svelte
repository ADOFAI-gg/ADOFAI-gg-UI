<script lang="ts">
	import NavPopupItem from '$lib/components/nav/NavPopupItem.svelte'
	import { getGlobalContext } from '$lib/index.js'
	import langs from '../../localization/langs.json'

	const ctx = getGlobalContext()

	const currentLang = ctx.language
</script>

{#each langs as lang (lang.code)}
	<NavPopupItem selected={$currentLang === lang.code} on:click={() => ctx.setLanguage(lang.code)}
		>{lang.name}</NavPopupItem
	>
{/each}
