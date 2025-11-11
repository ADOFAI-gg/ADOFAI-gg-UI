<script lang="ts">
	import { createSvelteFluent, initFluentContext } from '@nubolab-ffwd/svelte-fluent';
	import type { WithChildren } from 'bits-ui';
	import {
		createBundles,
		type GlobalContext,
		libLanguageNames,
		libTranslationResources,
		negotiateLanguages,
		setGlobalContext
	} from '../src/lib';

	const { children }: WithChildren = $props();

	const globalContext = $state<GlobalContext>({
		availableLanguages: Object.keys(libTranslationResources),
		languageNames: libLanguageNames,
		currentLanguage: 'ko'
	});

	setGlobalContext(globalContext);

	initFluentContext(() =>
		createSvelteFluent(
			createBundles(
				libTranslationResources,
				negotiateLanguages(
					globalContext.currentLanguage ? [globalContext.currentLanguage] : navigator.languages,
					Object.keys(libTranslationResources),
					{
						defaultLocale: 'ko'
					}
				)
			)
		)
	);
</script>

{@render children?.()}
