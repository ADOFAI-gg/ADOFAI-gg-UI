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
		attribute?: string
		htmlReplacer?: (value: string) => string
	}

	const { key, params = {}, htmlReplacer = (v) => v, attribute }: Props = $props()

	const htmlValue = derived(translate(currentLang, key, params, true, attribute), (v) => {
		return htmlReplacer(v)
	})
</script>

{@html $htmlValue}
