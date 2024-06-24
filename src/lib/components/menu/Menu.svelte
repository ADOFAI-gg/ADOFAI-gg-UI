<script lang="ts">
	import { Popover } from '$lib/index.js'
	import type { Placement } from 'tippy.js'

	export let placement: Placement = 'bottom'
</script>

<Popover let:close {placement}>
	<svelte:fragment slot="button" let:buttonRef>
		<slot name="button" {buttonRef} />
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
