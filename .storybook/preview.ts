import type { Preview } from '@storybook/sveltekit';
import Root from './preview-root.svelte';

import '@fontsource/ibm-plex-sans-kr/300.css';
import '@fontsource/ibm-plex-sans-kr/400.css';
import '@fontsource/ibm-plex-sans-kr/500.css';
import '@fontsource/ibm-plex-sans-kr/600.css';
import '@fontsource/ibm-plex-sans-kr/700.css';

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
