<script lang="ts">
	import { Button, getGlobalContext, Translation } from '$lib/index.js'

	const ctx = getGlobalContext()
</script>

<div class="nav-sign-area">
	<Button variant="ghost-light" size="md" onclick={ctx.callbacks.signIn}>
		<Translation key="ui-common:sign-in" />
	</Button>

	<Button variant="outlined" size="md" onclick={ctx.callbacks.signUp}>
		<Translation key="ui-common:sign-up" />
	</Button>
</div>

<style lang="scss">
	.nav-sign-area {
		display: flex;
		gap: 12px;
	}
</style>
