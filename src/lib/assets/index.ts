import { iconUrls, iconNames } from './icons/index.js'

export const getIconClass = (name: string) => `icon__${name}`

export const generateIconStyles = () => {
	const css: string[] = []
	for (const iconName of iconNames) {
		const url = iconUrls[iconName]
		const element = `.${getIconClass(iconName)} { --icon-url: url('${url.replace(/'/g, '%27')}') }`

		css.push(element)
	}

	return `<style>\n${css.join('\n')}\n</style>`
}

export { iconNames }
