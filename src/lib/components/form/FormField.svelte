<script lang="ts">
	import type { TranslationKey } from '$lib/index.js'
	import Translation from '$lib/utils/Translation.svelte'
	import FormHint from './FormHint.svelte'
	import FormHintArea from './FormHintArea.svelte'

	export let label: TranslationKey | null = null
	export let error: TranslationKey | null = null
	export let required: boolean = false
	export let noLabel: boolean = false
	export let helpText: TranslationKey | null = null
</script>

<div class="form-field">
	{#if noLabel}
		<div class="form-field-content">
			{#if label}
				<p class="label">
					<Translation key={label} />
					{#if required}
						<span class="required-sign">
							<Translation key="ui-common:form-required" />
						</span>
					{/if}
				</p>
			{/if}
			<slot />
		</div>
	{:else}
		<label class="form-field-content">
			{#if label}
				<p class="label">
					<Translation key={label} />
					{#if required}
						<span class="required-sign">
							<Translation key="ui-common:form-required" />
						</span>
					{/if}
				</p>
			{/if}
			<slot />
		</label>
	{/if}

	{#if helpText}
		<div class="form-help-text">
			<Translation key={helpText} />
		</div>
	{/if}

	<slot name="hints">
		{#if error}
			<FormHintArea>
				<FormHint type="error">
					<Translation key={error} />
				</FormHint>
			</FormHintArea>
		{/if}
	</slot>
</div>

<style lang="scss">
	@import '../../stylesheets/system/colors';

	.label {
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
	}

	.required-sign {
		color: rgba($red, 1);
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

	.form-help-text {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.6);
		line-height: 12px;
		margin-top: 4px;
	}
</style>
