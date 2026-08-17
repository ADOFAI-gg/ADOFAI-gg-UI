<script lang="ts" module>
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { UserProp } from '$lib/utils/types.js';
	import type { NavUser } from './props.js';

	export type NavUserAreaProps = Omit<HTMLButtonAttributes, 'children'> & {
		user: NavUser | UserProp;
		/** Accepted for source compatibility; beta Popover bindings use child props instead. */
		meltElement?: unknown;
	};
</script>

<script lang="ts">
	import { Avatar } from '../avatar/index.js';
	import { cn } from '$lib/utils/ui.js';

	const { user, class: className, ...restProps }: NavUserAreaProps = $props();
	delete restProps.meltElement;

	const avatar = 'avatarURL' in user ? user.avatarURL : user.avatar;
</script>

<button {...restProps} class={cn('gap-2 flex cursor-pointer items-center', className)}>
	<Avatar class="size-8" src={avatar ?? undefined} />
</button>
