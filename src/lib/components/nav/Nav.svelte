<script lang="ts">
	import { Logo } from '../misc/index.js';
	import * as Popover from '../popover/index.js';
	import { getGlobalContext, type GlobalContext } from '$lib/utils/context.js';
	import Link from './link.svelte';
	import Menu from './menu/menu.svelte';
	import NavLink from './NavLink.svelte';
	import NavSignArea from './NavSignArea.svelte';
	import NavUserArea from './NavUserArea.svelte';
	import NavMenu from './menu/NavMenu.svelte';
	import type { NavContextLink, NavLinkItemLike, NavProps, NavUserLike } from './props.js';

	type ContextWithNavigation = GlobalContext & {
		urls?: { main?: string };
		links?: NavContextLink[];
		callbacks?: {
			signOut?: () => void;
		};
	};

	const context = getGlobalContext() as ContextWithNavigation | undefined;

	const {
		user,
		minimal = false,
		appendLogo,
		leftSlot,
		rightSlot,
		menu,
		fullWidth = false,
		links: providedLinks,
		onSignIn,
		onSignUp,
		onSignOut
	}: NavProps = $props();

	const links = $derived(providedLinks ?? context?.links ?? []);
	const mainUrl = context?.urls?.main;
	const signOut = onSignOut ?? context?.callbacks?.signOut;

	const toBetaUser = (
		value: NavUserLike | null
	): { name: string; avatar: string | null } | null => {
		if (!value) return null;
		if ('avatarURL' in value) {
			return { name: value.displayName, avatar: value.avatarURL };
		}
		return value;
	};

	const betaUser = $derived(toBetaUser(user));

	const isContextLink = (link: NavLinkItemLike): link is NavContextLink => 'key' in link;
</script>

{#snippet logoContent()}
	<Logo height={16} />
{/snippet}

<nav class="h-14 bg-gg-darkblue/20 px-6 backdrop-blur-lg" class:sticky={!fullWidth}>
	<div class:gg-container={!fullWidth} class="mx-auto flex h-full items-center justify-between">
		<div class="gap-8 flex h-full items-center">
			{#if mainUrl}
				<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
				<a href={mainUrl} class="flex items-center">
					{@render logoContent()}
					{#if appendLogo}
						<span class="pl-2">{@render appendLogo()}</span>
					{/if}
				</a>
			{:else}
				<div class="flex items-center">
					{@render logoContent()}
					{#if appendLogo}
						<span class="pl-2">{@render appendLogo()}</span>
					{/if}
				</div>
			{/if}

			{#if links.length}
				<div class="gap-6 flex">
					{#each links as link (link.href)}
						{#if isContextLink(link)}
							<NavLink href={link.href} key={link.key} />
						{:else}
							<Link href={link.href}>{link.title}</Link>
						{/if}
					{/each}
				</div>
			{/if}
		</div>

		{@render leftSlot?.()}

		<div class="grow"></div>

		{@render rightSlot?.()}

		{#if !minimal}
			<Popover.Root>
				<Popover.Trigger>
					{#snippet child({ props })}
						{#if user}
							<NavUserArea {user} {...props} />
						{:else}
							<NavSignArea {onSignIn} {onSignUp} />
							<div class="ml-3 flex items-center justify-center">
								<button
									{...props}
									class="hover:bg-gg-darkblue/20 p-0 cursor-pointer rounded-full"
									aria-label="menu"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5 6H19"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
										/>
										<path
											d="M5 12H19"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
										/>
										<path
											d="M5 18H19"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
										/>
									</svg>
								</button>
							</div>
						{/if}
					{/snippet}
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content align="end" sideOffset={16}>
						{#if menu}
							<NavMenu>{@render menu()}</NavMenu>
						{:else}
							<Menu user={betaUser} onSignOut={signOut}></Menu>
						{/if}
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		{/if}
	</div>
</nav>
