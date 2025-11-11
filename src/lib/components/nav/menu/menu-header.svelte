<script lang="ts" module>
	export type MenuHeaderProps = WithChildren<{
		onBack: () => void;
	}>;
</script>

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import type { WithChildren } from 'bits-ui';

	const { onBack, children }: MenuHeaderProps = $props();
</script>

<div class="py-2.5 px-4 gap-2 flex items-center">
	<button class="size-4.5 cursor-pointer" onclick={onBack}>
		<Icon icon="gg:chevron-left" class="size-4.5" />
	</button>
	<div class="font-semibold">
		{@render children?.()}
	</div>
</div>
