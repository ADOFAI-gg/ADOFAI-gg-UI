<script lang="ts">
	import { writable } from 'svelte/store'
	import { IconProvider, setGlobalContext } from '../src/lib/index.js'
	import '../src/lib/stylesheets/globals.scss'

	const lang = writable('en')

	setGlobalContext({
		language: lang,
		setLanguage: (v) => lang.set(v),
		urls: {
			levels: 'https://adofai.gg/levels',
			rankings: 'https://adofai.gg/rankings',
			references: 'https://adofai.gg/references',
			signIn: 'https://accounts.adofai.gg/auth/signin',
			signUp: 'https://accounts.adofai.gg/autn/signup'
		}
	})
</script>

<IconProvider />

<slot />
