<script lang="ts">
	import { Checkbox, type TranslationKey } from '$lib/index.js'

	export let label: TranslationKey
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="label">
	<Checkbox />
	<span>{label}</span>
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
