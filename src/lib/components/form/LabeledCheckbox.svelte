<script lang="ts">
	import { Checkbox, Translation, type TranslationKey } from '$lib/index.js'

	export let label: TranslationKey
	export let checked: boolean = false
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="labeled-checkbox-container">
	<Checkbox bind:checked />
	<span class="label" class:checked>
		<Translation key={label} />
	</span>
</label>

<style lang="scss">
	.labeled-checkbox-container {
		display: flex;
		gap: 8px;
		align-items: center;
		font-size: 14px;
		line-height: 14px;
	}

	.label {
		opacity: 0.6;
		transition: opacity ease 0.2s;

		&.checked {
			opacity: 1;
		}
	}
</style>
