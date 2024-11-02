<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	const { children }: Props = $props()
</script>

<div class="popover-content-panel">
	{@render children()}
</div>

<style lang="scss">
	@use '../stylesheets/system/colors' as *;

	.popover-content-panel {
		padding: 18px;

		display: flex;
		flex-direction: column;
		gap: 8px;

		background: rgba($overlay, 1);
		box-shadow:
			0px 0px 12px rgba(0, 0, 0, 0.2),
			0px 0px 24px rgba(0, 0, 0, 0.2);
		border-radius: 16px;
	}
</style>
