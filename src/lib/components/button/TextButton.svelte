<script lang="ts">
	import { useActions, type ActionArray } from 'svelte-component-actions'

	export let use: ActionArray = []
	export let href: string | null = null
</script>

{#if href}
	<a {href} use:useActions={use} class="button" {...$$restProps}>
		<slot />
	</a>
{:else}
	<button on:click use:useActions={use} class="button" {...$$restProps}>
		<slot />
	</button>
{/if}

<style lang="scss">
	.button {
		font-size: 14px;
		opacity: 0.6;
		transition: opacity ease 0.2s;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		&:hover,
		&:focus {
			opacity: 1;
		}
	}
</style>
