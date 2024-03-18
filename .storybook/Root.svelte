<script lang="ts">
	import { writable } from 'svelte/store'
	import { IconProvider, setGlobalContext } from '../src/lib/index.js'
	import '../src/lib/stylesheets/globals.scss'

	const lang = writable('en')

	setGlobalContext({
		language: lang,
		setLanguage: (v) => lang.set(v)
	})
</script>

<IconProvider />

<slot />
