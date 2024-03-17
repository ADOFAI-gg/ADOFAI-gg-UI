<script lang="ts">
	import { NavSignArea, type User } from '$lib'
	import Logo from '../atoms/Logo.svelte'
	import Icon from '../atoms/icon/Icon.svelte'

	export let user: User | null
</script>

<nav class="nav">
	<Logo height={20} width={140} />
	<div class="spacer"></div>
	<NavSignArea {user} />
	<div class="nav-divider"></div>
	<button class="expand-icon">
		<Icon icon="expand" size={16} alt="Expand Icon" />
	</button>
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

	.expand-icon {
		opacity: 0.6;
		cursor: pointer;
		transition: opacity 0.2s ease-out;

		&:hover,
		&:focus {
			opacity: 1;
		}
	}

	.nav-divider {
		height: 18px;
		width: 1px;
		background-color: white;
		opacity: 0.4;
	}
</style>
