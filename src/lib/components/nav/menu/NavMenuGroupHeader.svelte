<script lang="ts">
	import Icon from '$lib/components/Icon.svelte'
	import type { Snippet } from 'svelte'
	import { getNavMenuContext } from './state'

	interface Props {
		children: Snippet
	}

	const { children }: Props = $props()

	const menu = getNavMenuContext()

	const onBack = () => {
		menu.groupStack.update((x) => {
			const v = [...x]
			v.pop()
			return v
		})
	}
</script>

<div class="nav-menu-group-header">
	<button onclick={onBack}>
		<Icon icon="chevronLeft" size={18} alt="back" />
	</button>
	{@render children()}
</div>

<style lang="scss">
	.nav-menu-group-header {
		display: flex;
		align-items: center;
		padding: 10px 16px;
		gap: 8px;
		font-size: 16px;
		font-weight: 600;
	}
</style>
