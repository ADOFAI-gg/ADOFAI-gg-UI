<script lang="ts" context="module">
	/* eslint svelte/no-at-html-tags: 0 */
</script>

<script lang="ts">
	import { getGlobalContext } from '$lib/index.js'
	import { derived } from 'svelte/store'

	import { type TranslationKey, translate } from './translation.js'
	import type { FluentVariable } from '@fluent/bundle'

	const currentLang = getGlobalContext().language

	export let key: TranslationKey
	export let params: Record<string, FluentVariable> = {}

	export let htmlReplacer: (value: string) => string = (v) => v

	$: htmlValue = derived(translate(currentLang, key, params, true), (v) => {
		return htmlReplacer(v)
	})
</script>

{@html $htmlValue}
