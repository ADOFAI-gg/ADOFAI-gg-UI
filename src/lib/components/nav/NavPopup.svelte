<script lang="ts">
	import {
		Icon,
		NavLanguageSelector,
		NavPopupItem,
		NavPopupLink,
		NavPopupSection,
		Popover,
		TextButton
	} from '$lib/index.js'
	import Translation from '$lib/utils/Translation.svelte'
	import { fly } from 'svelte/transition'

	enum TabType {
		Main,
		Language
	}

	let tab: TabType = TabType.Main

	let height = 0
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

	<div class="nav-popup-container">
		<div class="nav-popup-content" style="--content-height: {height}px;">
			{#if tab === TabType.Main}
				<div
					in:fly={{ x: '-100%', opacity: 1 }}
					out:fly={{ x: '-100%', opacity: 1 }}
					bind:clientHeight={height}
					class="nav-popup-group"
				>
					<NavPopupSection title="nav:group-settings">
						<NavPopupItem on:click={() => (tab = TabType.Language)}>
							<Translation key="nav:setting-language-international" />
						</NavPopupItem>
						<NavPopupItem>button2</NavPopupItem>
					</NavPopupSection>

					<NavPopupSection title="nav:group-pages">
						<NavPopupLink href="/">link1</NavPopupLink>
						<NavPopupLink href="/">link2</NavPopupLink>
					</NavPopupSection>
				</div>
			{:else if tab === TabType.Language}
				<div
					in:fly={{ x: '100%', opacity: 1 }}
					out:fly={{ x: '100%', opacity: 1 }}
					bind:clientHeight={height}
					class="nav-popup-group"
				>
					<NavPopupSection title="nav:setting-language" back on:back={() => (tab = TabType.Main)}>
						<NavLanguageSelector />
					</NavPopupSection>
				</div>
			{/if}
		</div>
	</div>
</Popover>

<style lang="scss">
	.nav-popup-group {
		display: flex;
		flex-direction: column;
		gap: 24px;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
	}

	.nav-popup-content {
		height: var(--content-height);
		position: relative;
		transition: height ease 0.4s;
		overflow: hidden;
	}

	.nav-popup-container {
		padding: 16px;
		max-width: 240px;
		width: 100vw;
	}
</style>
