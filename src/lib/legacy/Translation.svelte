<script lang="ts">
	/* eslint-disable svelte/no-at-html-tags */

	import { derived } from 'svelte/store';
	import { getGlobalContext } from '../utils/context.js';
	import { translate, type ArrayTranslationKey, type TranslationKey } from './translation.js';
	import type { FluentVariable } from '@fluent/bundle';

	interface Props {
		key: TranslationKey | ArrayTranslationKey;
		params?: Record<string, FluentVariable>;
		attribute?: string;
		htmlReplacer?: (value: string) => string;
	}

	const {
		key,
		params = {},
		attribute,
		htmlReplacer = (value) => value
	}: Props = $props();

	const language = getGlobalContext().language;
	const htmlValue = $derived(
		derived(translate(language, key, params, true, attribute), (value) => htmlReplacer(value))
	);
</script>

{@html $htmlValue}
