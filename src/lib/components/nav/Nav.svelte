<script lang="ts">
	import { Button, Logo, NavSignArea, type User } from '$lib/index.js'
	import Container from '$lib/components/Container.svelte'
	import NavUserArea from './NavUserArea.svelte'
	import IconButton from '$lib/components/IconButton.svelte'

	export let user: User | null
</script>

<nav class="nav-container">
	<Container>
		<div class="nav-content">
			<Logo height={20} width={140} />
			<div class="spacer"></div>

			{#if user}
				<NavUserArea {user} />
			{:else}
				<NavSignArea />
			{/if}

			<div class="menu-button">
				<IconButton>
					<svg
						width="24"
						height="25"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M5 6.5H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						<path d="M5 12.5H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						<path d="M5 18.5H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					</svg>
				</IconButton>
			</div>
		</div>
	</Container>
</nav>

<style lang="scss">
	.nav-container {
		background-color: rgba(var(--color-darkblue), 0.2);
	}

	.nav-content {
		height: 56px;
		display: flex;
		align-items: center;
	}

	.spacer {
		flex-grow: 1;
	}

	.menu-button {
		margin-left: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
