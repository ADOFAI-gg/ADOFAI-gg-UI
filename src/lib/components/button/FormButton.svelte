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
		height: 48px;
		display: flex;
		justify-content: center;
		align-items: center;

		font-size: 16px;
		font-weight: 500;

		border-radius: 6px;
		background-color: rgba(255, 255, 255, 0.2);

		transition: background-color ease 0.2s;

		&:hover,
		&:focus {
			background-color: rgba(255, 255, 255, 0.4);
		}
	}
</style>
