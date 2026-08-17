<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import Translation from '../../legacy/Translation.svelte';
	import type { NavLinkProps, NavTranslationKey } from './props.js';

	const { href, key, children }: NavLinkProps = $props();

	const translationId = (value: NavTranslationKey): string =>
		typeof value === 'string' ? value : value.join(':');

	const isLegacyKey = (value: NavTranslationKey) =>
		typeof value !== 'string' || value.includes(':');
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a {href} class="text-base font-semibold">
	{#if children}
		{@render children()}
	{:else if isLegacyKey(key)}
		<Translation {key} />
	{:else}
		<Localized id={translationId(key)} />
	{/if}
</a>
