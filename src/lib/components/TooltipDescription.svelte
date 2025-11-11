<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	const { children }: Props = $props()
</script>

<div class="tooltip-description">{@render children()}</div>

<style lang="scss">
	.tooltip-description {
		font-size: 14px;
		font-weight: 400;
		line-height: 140%;
		color: rgba(255, 255, 255, 0.6);
	}
</style>
