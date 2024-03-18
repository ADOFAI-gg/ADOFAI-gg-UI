<script lang="ts">
	import { useActions, type ActionArray } from 'svelte-component-actions'

	export let use: ActionArray = []
</script>

<button on:click use:useActions={use} class="button">
	<slot />
</button>

<style lang="scss">
	.button {
		font-size: 14px;
		opacity: 0.6;
		transition: opacity ease 0.2s;

		&:hover,
		&:focus {
			opacity: 1;
		}
	}
</style>
