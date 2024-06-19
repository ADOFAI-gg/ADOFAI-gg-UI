<script lang="ts">
	import { Button, getGlobalContext, Translation } from '$lib/index.js'

	const ctx = getGlobalContext()
</script>

<div class="nav-sign-area">
	<a href={ctx.urls.signIn}>
		<Button style="ghost-light" size="md">
			<Translation key="common:sign-in" />
		</Button>
	</a>

	<a href={ctx.urls.signUp}>
		<Button style="outlined" size="md">
			<Translation key="common:sign-up" />
		</Button>
	</a>
</div>

<style lang="scss">
	.nav-sign-area {
		display: flex;
		gap: 12px;
	}
</style>
