import { negotiateLanguages } from '@fluent/langneg';
import { FluentBundle, FluentResource } from '@fluent/bundle';

// LOCALES
import ko from './sources/ko.ftl?raw';
import en from './sources/en.ftl?raw';
import ja from './sources/ja.ftl?raw';
import vi from './sources/vi.ftl?raw';

export const libTranslationResources = {
	ko: [ko],
	en: [en],
	ja: [ja],
	vi: [vi]
} as Record<string, readonly string[]>;

export const libLanguageNames: Record<string, string> = {
	ko: '한국어',
	en: 'English',
	ja: '日本語',
	'zh-CN': '简体中文',
	vi: 'Vietnamese'
};

export const createBundles = (
	resources: Record<string, readonly string[]>,
	userLocales: readonly string[]
) => {
	const supportedLanguages = Object.keys(resources);

	const selectedLocales = negotiateLanguages(userLocales, supportedLanguages, {
		defaultLocale: 'ko'
	});

	return selectedLocales.map((locale) => {
		const bundle = new FluentBundle(locale);

		const langResources = resources[locale];

		for (const resource of langResources) {
			bundle.addResource(new FluentResource(resource));
		}

		return bundle;
	});
};
