const files = Object.fromEntries(
	Object.entries(
		import.meta.glob('./*/*.ftl', { eager: true, query: 'raw', import: 'default' })
	).map(([k, v]) => [k.slice(2, k.length - 4), v])
)

export const translationData: Record<string, string> = files as Record<string, string>
