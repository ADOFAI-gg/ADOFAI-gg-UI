<script lang="ts">
	import { getGlobalContext, Icon, Logo, NavPopup, NavSignArea, TextButton, type User } from '$lib/index.js'

	export let user: User | null

	const ctx = getGlobalContext()
</script>

<nav class="nav">
	<Logo height={20} width={140} />
	<div class="spacer"></div>
	<NavSignArea {user} />
	<div class="nav-divider"></div>
	{#if user}
		<TextButton href={ctx.urls.userSettings}>
			<Icon icon="cogs" size={16} alt="Settings" />
		</TextButton>
	{/if}
	<NavPopup />
</nav>

<style lang="scss">
	.nav {
		background-color: rgba(0, 0, 0, 0.25);
		height: 54px;
		display: flex;
		align-items: center;
		padding: 0 24px;
		position: sticky;
		top: 0;
		left: 0;
		gap: 16px;
	}

	.spacer {
		flex-grow: 1;
	}

	.nav-divider {
		height: 18px;
		width: 1px;
		background-color: white;
		opacity: 0.4;
	}
</style>
