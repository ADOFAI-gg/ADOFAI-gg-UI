<script lang="ts">
	import { Button, getGlobalContext, Translation } from '$lib/index.js'

	const ctx = getGlobalContext()
</script>

<div class="nav-sign-area">
	<a href={ctx.urls.signIn}>
		<Button variant="ghost-light" size="md">
			<Translation key="ui-common:sign-in" />
		</Button>
	</a>

	<a href={ctx.urls.signUp}>
		<Button variant="outlined" size="md">
			<Translation key="ui-common:sign-up" />
		</Button>
	</a>
</div>

<style lang="scss">
	.nav-sign-area {
		display: flex;
		gap: 12px;
	}
</style>
