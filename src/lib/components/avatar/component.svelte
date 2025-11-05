<script lang="ts" module>
	import { cn } from '$lib/utils/ui.js';
	import { Avatar } from 'bits-ui';

	export type AvatarProps = {
		src?: string;
		alt?: string;
	} & Omit<Avatar.RootProps, 'children'>;
</script>

<script lang="ts">
	const { class: className, src, alt, ...restProps }: AvatarProps = $props();
</script>

<Avatar.Root {...restProps} class={cn('bg-white/20 size-8 rounded-full', className)}>
	<Avatar.Image class="aspect-square size-full rounded-full" {src} {alt} />
</Avatar.Root>
