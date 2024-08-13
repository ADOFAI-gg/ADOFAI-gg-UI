import type { StorybookConfig } from '@storybook/svelte-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/svelte-vite',
		options: {}
	},
	viteFinal: async (config) => {
		config.plugins!.push(tsconfigPaths())
		return config
	}
}
export default config
