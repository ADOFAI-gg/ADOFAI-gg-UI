<script lang="ts">
	import { Avatar, RoundedOutlinedButton, TextButton, type User } from '$lib/index.js'

	export let user: User | null
</script>

{#if user}
	<div class="nav-user-area">
		<Avatar size={24} src={user.avatarURL} />
		<div class="username">{user.username}</div>
	</div>
{:else}
	<div class="nav-sign-area">
		<TextButton>Sign Up</TextButton>
		<RoundedOutlinedButton>Sign In</RoundedOutlinedButton>
	</div>
{/if}

<style lang="scss">
	.nav-sign-area {
		display: flex;
		gap: 16px;
		align-items: center;
	}

	.nav-user-area {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.username {
		font-size: 14px;
		font-weight: 500;
	}
</style>
