<script lang="ts">
	import { getGlobalContext, translate, type TranslationKey } from '$lib/index'
	import Icon from '../Icon.svelte'

	interface Props {
		value?: string
		placeholder?: TranslationKey
	}

	const { value = $bindable(''), placeholder }: Props = $props()

	const ctx = getGlobalContext()

	const translatedPlaceholder = placeholder
		? translate(ctx.language, placeholder, {}, false)
		: undefined
</script>

<div class="search-bar">
	<div class="icon">
		<Icon alt="icon" size={24} icon="search" />
	</div>
	<input type="text" class="input" placeholder={placeholder ? $translatedPlaceholder : ''} />
</div>

<style lang="scss">
	.search-bar {
		height: 48px;
		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: 24px;
		display: flex;
		align-items: center;
		padding: 0 20px;
		gap: 12px;
	}

	.input {
		width: 100%;
		height: 22px;
		font-size: 16px;
		line-height: 140%;

		background-color: transparent;

		&:focus {
			outline: none;
		}

		&::placeholder {
			color: rgba(255, 255, 255, 0.8);
		}
	}

	.icon {
		color: rgba(255, 255, 255, 0.6);
	}
</style>
