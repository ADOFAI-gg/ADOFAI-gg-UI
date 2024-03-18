<script lang="ts">
	import { useActions, type ActionArray } from 'svelte-component-actions'

	export let use: ActionArray = []
</script>

<button class="button" use:useActions={use} on:click {...$$restProps}>
	<slot />
</button>

<style lang="scss">
	.button {
		height: 32px;
		padding: 0 16px;
		font-size: 14px;
		background-color: rgba(255, 255, 255, 0.02);
		border: 1px solid white;
		border-radius: 9999px;
		opacity: 0.6;
		transition: opacity ease 0.2s;

		&:hover,
		&:focus {
			opacity: 1;
		}
	}
</style>
