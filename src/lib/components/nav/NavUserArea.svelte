<script lang="ts">
	import { Avatar } from '$lib/index.js'
	import type { User } from '$lib/types.js'

	export let user: User
</script>

<section class="nav-user-area">
	<Avatar size={24} src={user.avatarURL} />
	<span class="username-text">{user.displayName || user.username}</span>
</section>

<style lang="scss">
	.nav-user-area {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.username-text {
		font-size: 16px;
		font-weight: 500;
	}
</style>
