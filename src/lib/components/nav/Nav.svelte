<script lang="ts">
	import { getGlobalContext, Logo, NavSignArea, type User } from '$lib/index.js'
	import Container from '$lib/components/Container.svelte'
	import NavUserArea from './NavUserArea.svelte'
	import IconButton from '$lib/components/IconButton.svelte'
	import LogoIcon from '$lib/components/nav/LogoIcon.svelte'
	import NavLink from '$lib/components/nav/NavLink.svelte'

	interface Props {
		user: User | null
	}

	const { user }: Props = $props()

	// export let user: User | null

	const ctx = getGlobalContext()

	// $: mainUrl = ctx.urls.main
	const mainUrl = $derived(ctx.urls.main)
</script>

<nav class="nav-container">
	<Container>
		<div class="nav-content">
			<div class="start-area">
				<a href={mainUrl}>
					<div class="logo-icon">
						<LogoIcon />
					</div>
					<div class="logo-text">
						<Logo height={16} width={134} />
					</div>
				</a>

				<div class="nav-links">
					{#each ctx.links as link}
						<NavLink key={link.key} href={link.href} />
					{/each}
				</div>
			</div>

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
	@import '../../stylesheets/system/breakpoints';
	@import '../../stylesheets/system/colors';

	.nav-container {
		background-color: rgba($darkblue, 0.2);
		z-index: 1000;
		position: sticky;
		top: 0;
		width: 100%;
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

	.logo-icon {
		display: block;
	}

	.logo-text {
		display: none;
	}

	@include breakpoint('md') {
		.logo-icon {
			display: none;
		}

		.logo-text {
			display: block;
		}
	}

	.start-area {
		display: flex;
		gap: 32px;
		align-items: center;
	}

	.nav-links {
		gap: 24px;
		align-items: center;

		display: none;

		@include breakpoint('md') {
			display: flex;
		}
	}
</style>
