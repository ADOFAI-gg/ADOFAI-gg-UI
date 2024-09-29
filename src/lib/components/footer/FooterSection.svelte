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
	@import '../../stylesheets/system/breakpoints';

	.footer-section {
		display: flex;
		width: 100%;
		flex-direction: column;

		@include breakpoint('sm') {
			flex-direction: row;
			align-items: center;
			gap: 8px;
		}
	}

	.title {
		font-size: 14px;
		font-weight: 600;
	}

	.content {
		display: flex;
		flex-direction: column;

		@include breakpoint('sm') {
			gap: 12px;
			flex-direction: row;
		}
	}
</style>
