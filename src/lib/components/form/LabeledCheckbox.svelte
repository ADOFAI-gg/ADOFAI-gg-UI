<script lang="ts">
	import { Checkbox, Translation, type TranslationKey } from '$lib/index.js'

	export let label: TranslationKey
	export let checked: boolean = false
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="label">
	<Checkbox bind:checked />
	<span>
		<Translation key={label} />
	</span>
</label>

<style lang="scss">
	.label {
		display: flex;
		gap: 8px;
		align-items: center;
		font-size: 14px;
		line-height: 14px;
	}
</style>
