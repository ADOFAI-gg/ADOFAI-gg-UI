<script lang="ts">
	import type { User } from '$lib/types'
	import { emptyMeltElement, type AnyMeltElement, melt } from '@melt-ui/svelte'
	import Avatar from '../Avatar.svelte'
	import Icon from '../Icon.svelte'

	interface Props {
		user: User
		href?: string
		depth?: number
		meltElement?: AnyMeltElement
	}

	// @ts-expect-error invalid type
	const { user, href, depth = 0, meltElement = emptyMeltElement }: Props = $props()
</script>

{#snippet content()}
	<div class="user-list-item" style="--depth: {depth};" use:melt={$meltElement}>
		<Avatar size={20} src={user.avatarURL} />
		<div class="username">{user.displayName || user.username}</div>
		{#if user.isAdmin}
			<div class="admin-sign">
				<Icon icon="wrench" alt="admin" size={18} />
			</div>
		{/if}
	</div>
{/snippet}

{#if href}
	<a {href}>
		{@render content()}
	</a>
{:else}
	{@render content()}
{/if}

<style lang="scss">
	@import '../../stylesheets/system/colors';

	.user-list-item {
		display: flex;
		margin-left: calc(var(--depth) * 24px);
		align-items: center;
		gap: 4px;
	}

	.username {
		font-weight: 400;
		font-size: 16px;
		line-height: 140%;
	}

	.admin-sign {
		color: $blue;
	}
</style>
