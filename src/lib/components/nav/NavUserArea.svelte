<script lang="ts">
	import { Avatar } from '$lib/index.js'
	import type { User } from '$lib/types.js'
	import { melt, type AnyMeltElement } from '@melt-ui/svelte'

	interface Props {
		user: User
		meltElement: AnyMeltElement
	}

	const { user, meltElement }: Props = $props()
</script>

<button class="nav-user-area" use:melt={$meltElement}>
	<Avatar size={24} src={user.avatarURL} />
	<!-- <span class="username-text">{user.displayName}</span> -->
</button>

<style lang="scss">
	.nav-user-area {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	/* .username-text {
		font-size: 18px;
		font-weight: 500;
	} */
</style>
