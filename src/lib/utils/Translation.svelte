<script lang="ts">
	/* eslint svelte/no-at-html-tags: 0 */

	import { getGlobalContext } from '$lib/index.js'
	import { derived } from 'svelte/store'

	import { type TranslationKey, translate } from './translation.js'
	import type { FluentVariable } from '@fluent/bundle'

	const currentLang = getGlobalContext().language
	interface Props {
		key: TranslationKey
		params?: Record<string, FluentVariable>
		htmlReplacer?: (value: string) => string
	}

	const { key, params = {}, htmlReplacer = (v) => v }: Props = $props()

	const htmlValue = derived(translate(currentLang, key, params, true), (v) => {
		return htmlReplacer(v)
	})
</script>

{@html $htmlValue}
