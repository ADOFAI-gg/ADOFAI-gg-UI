<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	export type FooterLinkProps = Omit<HTMLAnchorAttributes, 'children'> & {
		href: string;
		children?: Snippet;
		highlight?: boolean;
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils/ui.js';

	const {
		href,
		children,
		highlight = false,
		class: className,
		...restProps
	}: FooterLinkProps = $props();

	const linkClass = cn(
		'text-sm opacity-80 transition-opacity hover:opacity-100',
		highlight && 'font-medium opacity-100',
		className
	);
</script>

<div>
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
	<a {href} {...restProps} class={linkClass}>
		{@render children?.()}
	</a>
</div>
