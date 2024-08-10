<script lang="ts">
	import { writable } from 'svelte/store'
	import { IconProvider, setGlobalContext } from '../src/lib/index.js'
	import '../src/lib/stylesheets/globals.scss'

	const lang = writable('ko')

	setGlobalContext({
		language: lang,
		setLanguage: (v) => lang.set(v),
		urls: {
			main: '/',
			levels: 'https://adofai.gg/levels',
			rankings: 'https://adofai.gg/rankings',
			references: 'https://adofai.gg/references',
			signIn: 'https://accounts.adofai.gg/auth/signin',
			signUp: 'https://accounts.adofai.gg/autn/signup',
			userSettings: 'https://accounts.adofai.gg/settings'
		},
		links: [
			{
				key: 'custom:Hello',
				href: '/hello'
			}
		]
	})
</script>

<IconProvider />

<slot />
