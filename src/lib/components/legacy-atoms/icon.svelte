<script lang="ts" module>
	import '$lib/icons/index.js';

	export type IconProps = {
		icon: string;
		size?: number | string;
		alt?: string;
		style?: string;
		class?: string;
	};
</script>

<script lang="ts">
	import Iconify from '@iconify/svelte';

	let { icon, size = 24, alt = 'icon', style, class: className }: IconProps = $props();
	const resolvedIcon = $derived(icon.includes(':') ? icon : `gg:${icon}`);
</script>

<Iconify
	icon={resolvedIcon}
	width={size}
	height={size}
	aria-label={alt}
	role="img"
	{style}
	class={className}
/>
