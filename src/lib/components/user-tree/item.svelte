<script lang="ts" module>
	import type { UserProp } from '$lib/utils/types.js';
	import { Avatar } from '../avatar/index.js';

	export type ItemProps = {
		user: UserProp;
	};
</script>

<script lang="ts">
	const { user }: ItemProps = $props();
</script>

<li class="gap-1 flex items-center">
	<Avatar class="size-5" src={user.avatar ?? undefined} />
	<span>{user.name}</span>
</li>
