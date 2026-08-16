<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type NavMenuGroupHeaderProps = { children?: Snippet };
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { getNavMenuContext } from './state.js';

	const { children }: NavMenuGroupHeaderProps = $props();
	const menu = getNavMenuContext();
	const onBack = () => menu.groupStack.update((stack) => stack.slice(0, -1));
</script>

<div class="gap-2 px-4 py-2.5 text-base font-semibold flex items-center">
	<button type="button" class="size-4.5 cursor-pointer" onclick={onBack} aria-label="Back">
		<Icon icon="gg:chevron-left" class="size-4.5" aria-hidden="true" />
	</button>
	{@render children?.()}
</div>
