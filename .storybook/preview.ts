import type { Preview } from '@storybook/svelte'
import Root from './Root.svelte'

const preview: Preview = {
	// parameters: {
	// 	controls: {
	// 		matchers: {
	// 			color: /(background|color)$/i,
	// 			date: /Date$/i
	// 		}
	// 	}
	// },

	// @ts-expect-error
	decorators: [() => Root]
}

export default preview
