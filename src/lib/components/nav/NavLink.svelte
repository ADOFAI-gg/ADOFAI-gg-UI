<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import type { NavLinkProps, NavTranslationKey } from './props.js';

	const { href, key, children }: NavLinkProps = $props();

	const translationId = (value: NavTranslationKey): string =>
		typeof value === 'string' ? value : value.join(':');
</script>

<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
<a {href} class="text-base font-semibold">
	{#if children}
		{@render children()}
	{:else}
		<Localized id={translationId(key)} />
	{/if}
</a>
