<script lang="ts">
	import type { TranslationKey } from '$lib/index.js'
	import Translation from '$lib/utils/Translation.svelte'
	import FormHint from './FormHint.svelte'

	export let label: TranslationKey | null = null
	export let error: TranslationKey | null = null
	export let required: boolean = false
</script>

<div class="form-field">
	<label class="form-field-content">
		{#if label}
			<p class="label">
				<Translation key={label} />

				{#if required}
					<span class="required-sign">*</span>
				{/if}
			</p>
		{/if}
		<slot />
	</label>
	{#if error}
		<FormHint>
			<Translation key={error} />
		</FormHint>
	{/if}
</div>

<style lang="scss">
	.label {
		font-size: 16px;
		font-weight: 500;
		line-height: 16px;
		flex-grow: 1;
	}

	.required-sign {
		color: rgba(var(--color-red), 1);
	}

	.form-field {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.form-field-content {
		display: flex;
		gap: 16px;
		align-items: center;
	}
</style>
