<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import Icon from '@iconify/svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	export type SectionTitleLinkProps = {
		icon?: string;
	} & HTMLAnchorAttributes;
</script>

<script lang="ts">
	const { class: className, icon, children, ...rest }: SectionTitleLinkProps = $props();
</script>

<a {...rest} class={cn('gap-1 font-semibold text-base flex items-center', className)}>
	{@render children?.()}
	{#if icon}
		<Icon {icon} class="size-4.5" />
	{/if}
</a>
