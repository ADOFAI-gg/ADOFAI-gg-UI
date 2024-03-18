<script lang="ts">
	import Translation from '$lib/utils/Translation.svelte'
	import type { TranslationKey } from '$lib/utils/translation.js'

	export let title: TranslationKey
</script>

<section class="nav-popup-section">
	<h4 class="title">
		<Translation key={title} />
	</h4>
	<hr class="divider" />

	<div class="content">
		<slot />
	</div>
</section>

<style lang="scss">
	.nav-popup-section {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.title {
		padding: 0 8px;
		font-weight: 700;
		font-size: 14px;
	}

	.divider {
		border: 0;
		height: 1px;
		background-color: rgba(255, 255, 255, 0.2);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}
</style>
