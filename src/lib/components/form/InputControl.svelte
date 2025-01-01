<script lang="ts">
	import { getGlobalContext, translate, type TranslationKey } from '$lib/index.js'

	export let placeholder: TranslationKey | null = null

	export let value: string = ''

	const ctx = getGlobalContext()

	$: translatedPlaceholder = placeholder ? translate(ctx.language, placeholder, {}, false) : null
</script>

<div class="input-control">
	<input
		bind:value
		{...$$restProps}
		placeholder={translatedPlaceholder ? $translatedPlaceholder : null}
		class="input"
	/>
</div>

<style lang="scss">
	.input-control {
		min-height: 32px;
		height: 100%;

		display: flex;

		border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	}

	.input::placeholder {
		color: rgba(255, 255, 255, 0.6);
	}

	.input {
		flex-grow: 1;
		background: transparent;
		padding: 8px 0;
		width: 100%;

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
