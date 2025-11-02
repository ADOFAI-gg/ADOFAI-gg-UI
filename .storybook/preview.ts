import type { Preview } from '@storybook/sveltekit';
import Root from './preview-root.svelte';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			codePanel: true
		},
		backgrounds: {
			options: {
				dark: { name: 'Dark', value: '#232b5a' }
			}
		}
	},
	initialGlobals: {
		backgrounds: { value: 'dark' }
	},
	decorators: [() => Root]
};

export default preview;
