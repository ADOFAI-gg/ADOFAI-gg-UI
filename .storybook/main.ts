import type { StorybookConfig } from '@storybook/sveltekit'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx|svelte)'],
	addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-svelte-csf',
        '@storybook/addon-storysource',
        '@chromatic-com/storybook'
    ],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {}
}
export default config
