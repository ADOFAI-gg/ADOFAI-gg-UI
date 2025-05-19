<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		children?: Snippet
	}
	const { children }: Props = $props()
</script>

<div class="comment-list">
	{@render children?.()}
</div>

<style lang="scss">
	.comment-list {
		width: 100%;
	}
</style>
