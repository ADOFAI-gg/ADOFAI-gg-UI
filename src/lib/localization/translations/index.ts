import ko_nav from './ko/nav.ftl?raw'
import ko_footer from './ko/footer.ftl?raw'
import ko_common from './ko/common.ftl?raw'
import en_nav from './en/nav.ftl?raw'
import en_footer from './en/footer.ftl?raw'
import en_common from './en/common.ftl?raw'

export const translationData: Record<string, string> = {
	'ko/nav': ko_nav,
	'ko/footer': ko_footer,
	'ko/common': ko_common,
	'en/nav': en_nav,
	'en/footer': en_footer,
	'en/common': en_common
}
