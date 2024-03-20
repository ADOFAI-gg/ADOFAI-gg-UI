<script lang="ts">
	import { getGlobalContext, translate, type TranslationKey } from '$lib/index.js'

	export let placeholder: TranslationKey | null = null

	const ctx = getGlobalContext()

	$: translatedPlaceholder = placeholder ? translate(ctx.language, placeholder, {}, false) : null

	$: console.log($translatedPlaceholder)
</script>

<div class="input-control">
	<input
		{...$$restProps}
		placeholder={translatedPlaceholder ? $translatedPlaceholder : null}
		class="input"
	/>
</div>

<style lang="scss">
	.input-control {
		height: 32px;

		display: flex;

		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	}

	.input {
		flex-grow: 1;
		background: transparent;
		&:focus {
			outline: none;
		}

		&::placeholder {
			font-weight: 300;
			font-size: 16px;
			line-height: 16px;
		}
	}
</style>
