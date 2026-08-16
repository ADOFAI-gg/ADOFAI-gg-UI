<script lang="ts" module>
	import type { UserProp } from '$lib/utils/types.js';
	import { cn } from '$lib/utils/ui.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Avatar from '../avatar/component.svelte';

	export type CommentProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		author: UserProp;
		timestamp?: Date;
		avatarSize?: number;
		children?: Snippet;
		actions?: Snippet;
	};
</script>

<script lang="ts">
	const {
		author,
		timestamp: _timestamp,
		avatarSize = 24,
		children,
		actions,
		class: className,
		style,
		...restProps
	}: CommentProps = $props();

	// Kept for API compatibility until timestamp rendering is implemented.
	void _timestamp;
</script>

<div {...restProps} class={cn('gap-2 flex w-full', className)} {style}>
	<Avatar
		class="shrink-0"
		src={author.avatar ?? undefined}
		alt={author.name}
		style={`width: ${avatarSize}px; height: ${avatarSize}px; ${style ?? ''}`}
	/>
	<div class="min-w-0 grow">
		<div class="gap-1 flex">
			<div class="text-sm font-semibold">{author.name}</div>
			<!-- TODO: timestamp -->
		</div>
		<div class="text-sm">
			{@render children?.()}
		</div>

		{#if actions}
			<div class="mt-0.5 flex">
				{@render actions()}
			</div>
		{/if}
	</div>
</div>
