<script lang="ts">
	import { getGlobalContext, translate, type TranslationKey } from '$lib/index.js'
	import { emptyMeltElement, type AnyMeltElement } from '@melt-ui/svelte'
	import type { HTMLInputAttributes } from 'svelte/elements'

	interface Props extends Omit<HTMLInputAttributes, 'placeholder'> {
		placeholder?: TranslationKey
		meltElement?: AnyMeltElement
	}

	let {
		placeholder,
		value = $bindable(),
		// @ts-expect-error invalid type
		meltElement = emptyMeltElement,
		...rest
	}: Props = $props()

	const ctx = getGlobalContext()

	const translatedPlaceholder = $derived(
		placeholder ? translate(ctx.language, placeholder, {}, false) : null
	)
</script>

<div class="input-control">
	<input
		bind:value
		{...rest}
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
