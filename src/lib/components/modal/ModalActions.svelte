<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		left?: Snippet
		right?: Snippet
	}

	const { left, right }: Props = $props()
</script>

<div class="actions">
	{@render left?.()}
	<div class="spacer"></div>
	{@render right?.()}
</div>

<style lang="scss">
	.actions {
		display: flex;
		gap: 12px;
	}

	.spacer {
		flex-grow: 1;
	}
</style>
