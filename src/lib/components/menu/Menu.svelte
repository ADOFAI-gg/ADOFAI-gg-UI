<script lang="ts">
	import { Popover } from '$lib/index.js'
	import type { Placement } from 'tippy.js'

	export let placement: Placement = 'bottom'
</script>

<Popover let:close {placement}>
	<slot slot="button" name="button" let:buttonRef {buttonRef} />

	<div class="menu">
		<slot {close} />
	</div>
</Popover>

<style lang="scss">
	.menu {
		padding: 8px 0;
	}
</style>
