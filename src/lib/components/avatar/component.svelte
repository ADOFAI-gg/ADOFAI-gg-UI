<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { Avatar } from 'bits-ui';

	export type AvatarProps = {
		src?: string | null;
		alt?: string;
		size?: number;
	} & Omit<Avatar.RootProps, 'children'>;
</script>

<script lang="ts">
	const {
		class: className,
		style,
		src,
		alt = 'Avatar',
		size = 32,
		...restProps
	}: AvatarProps = $props();

	const dimension = $derived(`${size}px`);
</script>

<Avatar.Root
	{...restProps}
	class={cn(
		'bg-white/20 size-[var(--avatar-size)] shrink-0 overflow-hidden rounded-full',
		className
	)}
	style={`--avatar-size: ${dimension}; ${style ?? ''}`}
>
	<Avatar.Image
		class="aspect-square size-full rounded-full select-none"
		{src}
		{alt}
		draggable={false}
	/>
	<Avatar.Fallback class="bg-white/40 size-full" />
</Avatar.Root>
