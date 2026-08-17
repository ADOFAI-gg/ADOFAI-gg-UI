<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type ModalActionsProps = {
		left?: Snippet;
		right?: Snippet;
	};
</script>

<script lang="ts">
	let { left, right }: ModalActionsProps = $props();
</script>

<div class="actions">
	{@render left?.()}
	<div class="spacer"></div>
	{@render right?.()}
</div>

<style>
	.actions {
		display: flex;
		gap: 12px;
	}

	.spacer {
		flex-grow: 1;
	}
</style>
