import { globIterate } from 'glob'
import { readFile, writeFile } from 'fs/promises'
import { format, resolveConfig } from 'prettier'

const prettierConfig = await resolveConfig()

const generateIcons = async () => {
	const outputPath = 'src/lib/assets/icons/index.ts'
	const prefix = 'src/lib/assets/icons/'

	const lines = []
	const names = []

	for await (const i of globIterate('src/lib/assets/icons/*.svg')) {
		const name = i.slice(prefix.length, i.length - 4)
		lines.push(`import ${name} from './${name}.svg?url'`)
		names.push(name)
	}

	lines.push('')
	lines.push(
		`export const iconUrls: Record<string, string> = {\n${names.map((x) => `\t${x}`).join(',\n')}\n}`
	)
	lines.push('')
	lines.push(`export const iconNames: string[] = ${JSON.stringify(names)}`)

	await writeFile(
		outputPath,
		await format(lines.join('\n'), { ...prettierConfig, parser: 'typescript' })
	)
}

const generateTranslations = async () => {
	const outputPath = 'src/lib/localization/translations/index.ts'
	const prefix = 'src/lib/localization/translations/'

	const lines = []
	const translationData = []

	for await (const i of globIterate('src/lib/localization/translations/*/*.ftl')) {
		const name = i.slice(prefix.length, i.length - 4)
		// const importName = name.replace(/\//g, '_')

		// lines.push(`import ${importName} from './${name}.ftl?raw'`)

		translationData.push(`${JSON.stringify(name)}: ${JSON.stringify(await readFile(i, 'utf-8'))}`)
	}

	lines.push('')

	lines.push(
		`export const translationData: Record<string, string> = {\n${translationData.map((x) => `\t${x}`).join(',\n')}\n}`
	)

	await writeFile(
		outputPath,
		await format(lines.join('\n'), { ...prettierConfig, parser: 'typescript' })
	)
}

await Promise.all([generateIcons(), generateTranslations()])
