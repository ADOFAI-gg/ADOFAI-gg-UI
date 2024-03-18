<script lang="ts">
	import Translation from '$lib/utils/Translation.svelte'
	import type { TranslationKey } from '$lib/utils/translation.js'
	import { Icon, TextButton } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'

	export let title: TranslationKey
	export let back = false

	const dispatch = createEventDispatcher()
</script>

<section class="nav-popup-section">
	<div class="title-container">
		{#if back}
			<TextButton on:click={() => dispatch('back')}>
				<Icon icon="chevronLeft" size={16} alt="back" />
			</TextButton>
		{/if}
		<h4 class="title">
			<Translation key={title} />
		</h4>
	</div>
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

	.title-container {
		display: flex;
		padding: 0 8px;
		gap: 8px;
		align-items: center;
	}
</style>
