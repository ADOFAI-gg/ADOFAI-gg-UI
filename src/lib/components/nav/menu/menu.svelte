<script lang="ts">
	import { Command } from 'bits-ui';
	import MenuItem from './menu-item.svelte';
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { getGlobalContext } from '$lib/utils/context.js';
	import { onMount, tick, type Snippet } from 'svelte';
	import MenuHeader from './menu-header.svelte';
	import MenuDivider from './menu-divider.svelte';
	import type { UserProp } from '$lib/utils/types.js';

	let currentTab = $state('default');

	const ctx = getGlobalContext();

	const {
		extraItems,
		onSignOut,
		user
	}: {
		extraItems?: Snippet;
		onSignOut?: () => void;
		user?: UserProp | null;
	} = $props();

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	let inputValue = $state('');
	let value = $state('');
	let langSelectionTarget = $state('');

	$effect(() => {
		if (inputValue) inputValue = '';
	});

	$effect(() => {
		if (!langSelectionTarget) return;
		if (langSelectionTarget !== value) value = langSelectionTarget;
	});
</script>

<Command.Root
	bind:value
	class="w-[280px]"
	shouldFilter={false}
	onValueChange={(v) => {
		if (ctx.currentLanguage === ctx.availableLanguages[0]) {
			langSelectionTarget = '';
		} else {
			tick().then(() => {
				langSelectionTarget = '';
			});
		}
	}}
	onkeydown={(e) => {
		if (e.key === 'ArrowLeft') {
			currentTab = 'default';
		}
	}}
>
	<Command.Input
		bind:value={inputValue}
		class="size-0 pointer-events-none fixed left-[10000px] bg-transparent"
		disabled={!mounted}
	/>
	<Command.List>
		<Command.Viewport>
			{#if currentTab === 'default'}
				<MenuItem
					onSelect={() => {
						langSelectionTarget = ctx.currentLanguage;
						currentTab = 'language';
					}}
					icon="gg:chevron-right"
				>
					<Localized id="lib-language" />
				</MenuItem>

				{@render extraItems?.()}

				{#if onSignOut && user}
					<MenuItem onSelect={onSignOut} variant="danger">
						<Localized id="lib-sign-out" />
					</MenuItem>
				{/if}
			{:else if currentTab === 'language'}
				<MenuHeader onBack={() => (currentTab = 'default')}>
					<Localized id="lib-language" />
				</MenuHeader>
				<MenuDivider />
				{#each ctx.availableLanguages as lang}
					<MenuItem
						value={lang}
						variant="selection"
						data-current-value={lang === ctx.currentLanguage}
						onSelect={() => {
							ctx.currentLanguage = lang;
						}}
					>
						{ctx.languageNames[lang] ?? lang}
					</MenuItem>
				{/each}
			{/if}
		</Command.Viewport>
	</Command.List>
</Command.Root>
