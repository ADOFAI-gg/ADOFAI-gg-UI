<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils/ui.js';

	export type FormFieldProps = {
		label?: string;
		error?: string;
		required?: boolean;
		noLabel?: boolean;
		subtitle?: string;
		helpText?: string;
		horizontal?: boolean;
		modal?: boolean;
		children?: Snippet;
		hints?: Snippet;
		noHintsArea?: boolean;
		class?: string;
	};

	export type FieldProps = FormFieldProps;
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Hint from './hint.svelte';
	import HintArea from './hint-area.svelte';

	let {
		noLabel = false,
		children,
		horizontal = false,
		subtitle,
		label,
		helpText,
		required = false,
		error,
		modal = false,
		hints,
		noHintsArea = false,
		class: className
	}: FormFieldProps = $props();
</script>

{#snippet hintsFallback()}
	{#if error}
		{#if noHintsArea}
			<Hint type="error">
				<Localized id={error} />
			</Hint>
		{:else}
			<HintArea {modal}>
				<Hint type="error">
					<Localized id={error} />
				</Hint>
			</HintArea>
		{/if}
	{/if}
{/snippet}

<div class={cn('flex flex-col', className)}>
	<svelte:element
		this={noLabel ? 'div' : 'label'}
		class={cn('gap-0.5 flex flex-col', horizontal && 'gap-4 min-h-[38px] flex-row')}
	>
		{#if label}
			<p
				class={cn(
					'text-base leading-normal font-medium',
					horizontal && 'w-10 flex h-[38px] items-center'
				)}
			>
				<Localized id={label} />
				{#if required}
					<span class="ml-1 text-xs font-medium text-gg-red">
						<Localized id="lib-form-required" />
					</span>
				{/if}
			</p>
		{/if}
		{#if subtitle}
			<p class="text-base text-white/60">
				<Localized id={subtitle} />
			</p>
		{/if}
		<span class={cn('content', horizontal && 'w-0 pl-4 grow')}>
			{@render children?.()}
		</span>
	</svelte:element>

	{#if helpText}
		<div class="mt-1 text-xs leading-3 text-white/60">
			<Localized id={helpText} />
		</div>
	{/if}

	{#if hints}
		{@render hints()}
	{:else}
		{@render hintsFallback()}
	{/if}
</div>
