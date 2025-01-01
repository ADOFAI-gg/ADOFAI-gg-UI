<script lang="ts">
	import type { TranslationKey } from '$lib/index.js'
	import Translation from '$lib/utils/Translation.svelte'
	import FormHint from './FormHint.svelte'
	import FormHintArea from './FormHintArea.svelte'
	import type { Snippet } from 'svelte'

	interface Props {
		label?: TranslationKey
		error?: TranslationKey
		required?: boolean
		noLabel?: boolean
		helpText?: TranslationKey
		horizontal?: boolean
		children?: Snippet
		hints?: Snippet
	}

	const {
		noLabel = false,
		children,
		horizontal,
		label,
		helpText,
		required = false,
		error,
		hints
	}: Props = $props()
</script>

{#snippet hintsFallback()}
	{#if error}
		<FormHintArea>
			<FormHint type="error">
				<Translation key={error} />
			</FormHint>
		</FormHintArea>
	{/if}
{/snippet}

<div class="form-field" class:horizontal>
	{#if noLabel}
		<div class="form-field-content">
			{@render children?.()}
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
			<span class="content">
				{@render children?.()}
			</span>
		</label>
	{/if}

	{#if helpText}
		<div class="form-help-text">
			<Translation key={helpText} />
		</div>
	{/if}

	{@render (hints || hintsFallback)()}
</div>

<style lang="scss">
  @use '../../stylesheets/system/colors' as *;

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

  .horizontal {
    .form-field-content {
			flex-direction: row;
			min-height: 38px;
			gap: 16px;

			.label {
				width: 40px;
				display: flex;
				height: 38px;
				align-items: center;
			}

			.content {
				padding-left: 16px;
				width: 0;
				flex-grow: 1;
			}
    }
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
