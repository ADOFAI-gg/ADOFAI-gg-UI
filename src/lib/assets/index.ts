export const getIconClass = (name: string) => `icon__${name}`

const icons = import.meta.glob('./icons/*.svg', {
	eager: true,
	as: 'url'
})

const iconPrefix = './icons/'
export const iconNames = Object.keys(icons).map((x) => x.slice(iconPrefix.length, x.length - 4))

export const generateIconStyles = () => {
	const css: string[] = []
	for (const key in icons) {
		const name = key.slice(iconPrefix.length, key.length - 4)
		const url = icons[key]
		const element = `.${getIconClass(name)} { --icon-url: url('${url.replace(/'/g, '%27')}') }`

		css.push(element)
	}

	return `<style>\n${css.join('\n')}\n</style>`
}
