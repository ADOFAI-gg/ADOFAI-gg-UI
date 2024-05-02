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

<style lang="scss">
	.footer-section {
		display: flex;
		width: 100%;
		gap: 8px;
		align-items: center;
	}

	.title {
		font-size: 14px;
	}

	.content {
		display: flex;
		gap: 12px;
	}
</style>
