<script lang="ts">
	import type { User } from '$lib/types'
	import type { Snippet } from 'svelte'
	import Avatar from '../Avatar.svelte'

	interface Props {
		author: User
		timestamp?: Date
		avatarSize?: number
		children?: Snippet
		actions?: Snippet
	}

	const { author, avatarSize = 24, children, actions, timestamp }: Props = $props()
</script>

<div class="comment">
	<Avatar size={avatarSize} src={author.avatarURL} />
	<div class="comment-col">
		<div class="comment-meta">
			<div class="comment-author-name">{author.displayName}</div>
			<!-- TODO: timestamp -->
		</div>
		<div class="comment-content">
			{@render children?.()}
		</div>

		{#if actions}
			<div class="comment-actions">
				{@render actions()}
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.comment {
		display: flex;
		gap: 8px;
		width: 100%;
	}

	.comment-col {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		width: 0;
	}

	.comment-meta {
		display: flex;
		gap: 4px;
	}

	.comment-author-name {
		font-size: 14px;
		font-weight: 600;
	}

	.comment-content {
		font-size: 14px;
	}

	.comment-actions {
		margin-top: 2px;
		display: flex;
	}
</style>
