<script lang="ts">
	import Container from '$lib/components/Container.svelte'
	import IconButton from '$lib/components/IconButton.svelte'
	import LogoIcon from '$lib/components/nav/LogoIcon.svelte'
	import NavLink from '$lib/components/nav/NavLink.svelte'
	import { getGlobalContext, Logo, NavSignArea, Popover, type User } from '$lib/index.js'
	import type { Snippet } from 'svelte'
	import NavUserArea from './NavUserArea.svelte'
	import NavMenu from './menu/NavMenu.svelte'

	interface Props {
		user: User | null
		minimal?: boolean
		appendLogo?: Snippet
		leftSlot?: Snippet
		rightSlot?: Snippet
		menu?: Snippet
		fullWidth?: boolean
	}

	const {
		user,
		minimal,
		fullWidth = false,
		menu,
		leftSlot,
		rightSlot,
		appendLogo
	}: Props = $props()

	const ctx = getGlobalContext()

	const mainUrl = $derived(ctx.urls.main)
</script>

<nav class="nav-container" class:full-width={fullWidth}>
	{#snippet content()}
		<div class="nav-content">
			<div class="start-area">
				<a href={mainUrl} class="logo-link">
					<div class="logo-icon">
						<LogoIcon />
					</div>
					<div class="logo-text">
						<Logo height={16} width={134} />
					</div>
					{#if appendLogo}
						<div class="append-logo">
							{@render appendLogo()}
						</div>
					{/if}
				</a>

				<div class="nav-links">
					{#each ctx.links as link}
						<NavLink key={link.key} href={link.href} />
					{/each}
				</div>
			</div>

			{@render leftSlot?.()}

			<div class="spacer"></div>

			{@render rightSlot?.()}

			{#if !minimal}
				<Popover placement="bottom-end">
					{#snippet trigger(trigger)}
						{#if user}
							<NavUserArea meltElement={trigger} {user} />
						{:else}
							<NavSignArea />
							<div class="menu-icon">
								<IconButton meltElement={trigger}>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5 6.5H19"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
										/>
										<path
											d="M5 12.5H19"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
										/>
										<path
											d="M5 18.5H19"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
										/>
									</svg>
								</IconButton>
							</div>
						{/if}
					{/snippet}

					<NavMenu>{@render menu?.()}</NavMenu>
				</Popover>
			{/if}
		</div>
	{/snippet}
	{#if fullWidth}
		{@render content()}
	{:else}
		<Container>
			{@render content()}
		</Container>
	{/if}
</nav>

<style lang="scss">
	@use '../../stylesheets/system/breakpoints' as *;
	@use '../../stylesheets/system/colors' as *;

	.nav-container {
		background-color: rgba($darkblue, 0.2);
		z-index: 1000;
		position: sticky;
		top: 0;
		width: 100%;

		backdrop-filter: blur(16px);

		&.full-width {
			padding: 0 24px;
		}
	}

	.nav-content {
		height: 56px;
		display: flex;
		align-items: center;
	}

	.append-logo {
		padding-left: 8px;
	}

	.spacer {
		flex-grow: 1;
	}

	.logo-icon {
		display: block;
	}

	.logo-text {
		display: none;
	}

	.menu-icon {
		margin-left: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
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

	.logo-link {
		display: flex;
		align-items: center;
	}
</style>
