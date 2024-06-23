<script lang="ts">
	import type { TranslationKey } from '$lib/index.js'
	import Translation from '$lib/utils/Translation.svelte'
	import FormHint from './FormHint.svelte'
	import FormHintArea from './FormHintArea.svelte'

	export let label: TranslationKey | null = null
	export let error: TranslationKey | null = null
	export let required: boolean = false
</script>

<div class="form-field {$$props.class || ''}" {...$$restProps}>
	<label class="form-field-content">
		{#if label}
			<p class="label">
				<Translation key={label} />
				{#if required}
					<span class="required-sign">
						<Translation key="common:form-required" />
					</span>
				{/if}
			</p>
		{/if}
		<slot />
	</label>

	{#if error}
		<FormHintArea>
			<FormHint type="error">
				<Translation key={error} />
			</FormHint>
		</FormHintArea>
	{/if}

	<div class="hints-container">
		<div class="hints">
			<slot name="hints" />
		</div>
	</div>
</div>

<style lang="scss">
	.label {
		font-size: 16px;
		font-weight: 500;
		line-height: 16px;
	}

	.required-sign {
		color: rgba(var(--color-red), 1);
		font-size: 12px;
		font-weight: 500;
		margin-left: 4px;
	}

	.form-field {
		display: flex;
		flex-direction: column;
	}

	.form-field-content {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.hints {
		display: none;
		position: absolute;
		top: 0;
		width: 100%;
	}

	.form-field:has(input:focus) .hints {
		display: block;
	}

	.hints-container {
		position: relative;
	}
</style>
