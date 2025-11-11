<script lang="ts">
	import { writable } from 'svelte/store'
	import { IconProvider, setGlobalContext } from '../src/lib/index.js'
	import '../src/lib/stylesheets/globals.scss'

	const lang = writable('ko')

	setGlobalContext({
		language: lang,
		setLanguage: (v) => lang.set(v),
		urls: {
			main: '/'
		},
		links: [
			{
				key: 'Hello',
				href: '/hello'
			}
		],
		callbacks: {
			signIn: () => {},
			signUp: () => {}
		}
	})
</script>

<IconProvider />

<slot />
