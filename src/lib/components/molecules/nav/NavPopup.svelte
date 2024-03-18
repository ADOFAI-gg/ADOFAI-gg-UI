<script lang="ts">
	import NavPopupItem from '$lib/components/atoms/nav/NavPopupItem.svelte'
	import NavPopupLink from '$lib/components/atoms/nav/NavPopupLink.svelte'
	import { TextButton, Icon, Popover, NavPopupSection } from '$lib/index.js'
</script>

<Popover
	placement="bottom-end"
	options={{
		offset: [0, 32]
	}}
>
	<TextButton slot="button" let:buttonRef use={[buttonRef]}>
		<Icon icon="expand" size={16} alt="Expand Icon" />
	</TextButton>

	<div class="nav-popup-content">
		<NavPopupSection title="nav:group-settings">
			<NavPopupItem>test</NavPopupItem>
			<NavPopupItem>test2</NavPopupItem>
		</NavPopupSection>

		<NavPopupSection title="nav:group-pages">
			<NavPopupLink href="/">link test</NavPopupLink>
			<NavPopupLink href="/">link test</NavPopupLink>
		</NavPopupSection>
	</div>
</Popover>

<style lang="scss">
	.nav-popup-content {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 16px;
		max-width: 240px;
		width: 100vw;
	}
</style>
