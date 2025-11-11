<script lang="ts">
	import { Translation, type TranslationKey } from '$lib/index.js'

	export let href: string
	export let key: TranslationKey
</script>

<a {href} class="nav-link">
	<Translation {key} />
</a>

<style lang="scss">
	.nav-link {
		font-size: 16px;
		font-weight: 600;
	}
</style>
