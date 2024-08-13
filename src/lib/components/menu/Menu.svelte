<script lang="ts">
	import { Popover, type FloatingPlacement } from '$lib/index.js'

	export let placement: FloatingPlacement = 'bottom'
</script>

<Popover let:close {placement}>
	<svelte:fragment slot="button" let:trigger>
		<slot name="button" {trigger} />
	</svelte:fragment>

	<div class="menu">
		<slot {close} />
	</div>
</Popover>

<style lang="scss">
	.menu {
		padding: 8px 0;
	}
</style>
