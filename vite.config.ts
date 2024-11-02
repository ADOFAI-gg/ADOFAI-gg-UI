import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'
import pkg from './package.json'
import libAssets from '@laynezh/vite-plugin-lib-assets'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		tsconfigPaths(),
		dts({
			exclude: ['src/stories']
		}),
		libAssets({
			limit: 1024 * 8,
			exclude: ['.jpg', '.png', '.ttf', '.otf', '.woff', '.webp']
		})
	],
	build: {
		lib: {
			entry: ['./src/main.ts'],
			formats: ['es']
		},
		copyPublicDir: false,
		rollupOptions: {
			external: Object.keys({
				...pkg.dependencies,
				...pkg.peerDependencies
			})
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler'
			}
		}
	}
})
