<script lang="ts">
	import { Logo, NavSignArea, type User } from '$lib/index.js'
	import Container from '$lib/components/Container.svelte'
	import NavUserArea from './NavUserArea.svelte'

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
</style>
