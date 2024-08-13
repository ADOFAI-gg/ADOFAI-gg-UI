<script lang="ts">
	import type { Action } from 'svelte/action'
	const buttonRef: Action = (node) => {}
</script>

<slot name="button" {buttonRef} />
<!-- 
{#if BROWSER}
	<div bind:this={content} role="menu">
		<slot {close} />
	</div>
{/if} -->
