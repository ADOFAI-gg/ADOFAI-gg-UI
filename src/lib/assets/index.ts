export const getIconClass = (name: string) => `icon__${name}`

export const generateIconStyles = () => {
	const prefix = './icons/'
	const icons = import.meta.glob('./icons/*.svg', {
		eager: true,
		as: 'url'
	})
	const css: string[] = []
	for (const key in icons) {
		const name = key.slice(prefix.length, key.length - 4)
		const url = icons[key]
		const element = `.${getIconClass(name)} { --icon-url: url('${url.replace(/'/g, '%27')}') }`

		css.push(element)
	}

	return `<style>\n${css.join('\n')}\n</style>`
}
