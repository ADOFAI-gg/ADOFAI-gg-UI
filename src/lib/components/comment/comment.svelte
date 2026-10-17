<script lang="ts" module>
	import type { UserProp } from '$lib/utils/types.js';
	import { cn } from '$lib/utils/ui.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Avatar from '../avatar/component.svelte';

	export type CommentProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		author: UserProp | { displayName: string; avatarURL: string | null; isAdmin: boolean };
		timestamp?: Date;
		avatarSize?: number;
		children?: Snippet;
		actions?: Snippet;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
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

		const authorName = $derived('name' in author ? author.name : author.displayName);
	const authorAvatar = $derived('avatar' in author ? author.avatar : author.avatarURL);
	let now = $state(Date.now());
	onMount(() => {
		const timer = setInterval(() => (now = Date.now()), 60_000);
		return () => clearInterval(timer);
	});
	const relativeTimestamp = $derived.by(() => {
		if (!_timestamp || Number.isNaN(_timestamp.getTime())) return null;
		const seconds = Math.round((_timestamp.getTime() - now) / 1000);
		const abs = Math.abs(seconds);
		const [unit, divisor]: [Intl.RelativeTimeFormatUnit, number] =
			abs < 60 ? ['second', 1] : abs < 3600 ? ['minute', 60] : abs < 86400 ? ['hour', 3600] : abs < 2_592_000 ? ['day', 86400] : abs < 31_536_000 ? ['month', 2_592_000] : ['year', 31_536_000];
		return new Intl.RelativeTimeFormat('ko', { numeric: 'always' }).format(Math.round(seconds / divisor), unit);
	});
</script>

<div {...restProps} class={cn('gap-2 flex w-full', className)} {style}>
	<Avatar
		class="shrink-0"
		src={authorAvatar ?? undefined}
		alt={authorName}
		style={`width: ${avatarSize}px; height: ${avatarSize}px; ${style ?? ''}`}
	/>
	<div class="min-w-0 grow">
		<div class="gap-1 flex">
			<div class="text-sm font-semibold">{authorName}</div>
			{#if relativeTimestamp && _timestamp}<time datetime={_timestamp.toISOString()} title={new Intl.DateTimeFormat('ko-KR', { dateStyle: 'full', timeStyle: 'long' }).format(_timestamp)} class="text-xs text-muted-foreground">{relativeTimestamp}</time>{/if}
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
