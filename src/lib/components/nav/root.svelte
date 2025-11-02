<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { Button } from '../button/index.js';
	import { Logo } from '../logo/index.js';
	import Link from './link.svelte';
	import type { RootProps } from './props.js';
	import { Popover } from '$lib/index.js';
	import Menu from './menu/menu.svelte';

	const { links, logo }: RootProps = $props();
</script>

{#snippet logoContent()}
	<Logo height={16} />
{/snippet}

<nav class="h-14 bg-gg-darkblue/20 px-6">
	<div class="max-w-6xl mx-auto flex h-full items-center justify-between">
		<div class="gap-8 flex h-full items-center">
			{#if logo}
				{@render logo({ content: logoContent })}
			{:else}
				{@render logoContent()}
			{/if}

			{#if links}
				<div class="gap-6 flex">
					{#each links as link}
						<Link href={link.href}>
							{link.title}
						</Link>
					{/each}
				</div>
			{/if}
		</div>

		<div class="gap-3 flex items-center">
			<Button size="md" variant="ghostLight">
				<Localized id="lib-sign-in" />
			</Button>
			<Button size="md" variant="outlined">
				<Localized id="lib-sign-up" />
			</Button>

			<Popover.Root>
				<Popover.Trigger>
					{#snippet child({ props })}
						<button
							{...props}
							class="hover:bg-gg-darkblue/20 cursor-pointer rounded-full transition-colors"
							aria-label="menu"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M5 6H19" stroke="white" stroke-width="2" stroke-linecap="round" />
								<path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" />
								<path d="M5 18H19" stroke="white" stroke-width="2" stroke-linecap="round" />
							</svg>
						</button>
					{/snippet}
				</Popover.Trigger>
				<Popover.Portal>
					<Popover.Content align="end" sideOffset={16}>
						<Menu />
					</Popover.Content>
				</Popover.Portal>
			</Popover.Root>
		</div>
	</div>
</nav>
