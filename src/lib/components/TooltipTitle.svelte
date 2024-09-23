<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	const { children }: Props = $props()
</script>

<div class="tooltip-title">{@render children()}</div>

<style lang="scss">
	.tooltip-title {
		font-size: 14px;
		font-weight: 600;
		line-height: 140%;
	}
</style>
