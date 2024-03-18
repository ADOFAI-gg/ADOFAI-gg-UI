<script lang="ts">
	import Translation from '$lib/utils/Translation.svelte'
	import type { TranslationKey } from '$lib/utils/translation.js'

	export let title: TranslationKey
</script>

<section class="footer-section">
	<div class="title">
		<Translation key={title} />
	</div>
	<div class="content">
		<slot />
	</div>
</section>

<style lang="ts">
	.footer-section {
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 16px;
		opacity: 0.6;
	}
</style>
