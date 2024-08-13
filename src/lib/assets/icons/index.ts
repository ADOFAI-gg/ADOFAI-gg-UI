const icons = Object.fromEntries(
	Object.entries(import.meta.glob('./*.svg', { eager: true, import: 'default' })).map(([k, v]) => [
		k.slice(2, k.length - 4),
		v
	])
)

export const iconUrls: Record<string, string> = icons as Record<string, string>

export const iconNames = Object.keys(icons)
