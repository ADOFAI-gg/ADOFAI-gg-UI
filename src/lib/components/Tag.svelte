<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
		color: 'yellow' | 'blue' | 'white' | 'gray'
	}

	const { children, color }: Props = $props()
</script>

<span class="tag tag-{color}">{@render children()}</span>
