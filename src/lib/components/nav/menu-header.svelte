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
	<button class="size-[18px] cursor-pointer" onclick={onBack}>
		<Icon icon="gg:chevronleft" class="size-[18px]" />
	</button>
	<div class="font-semibold">
		{@render children?.()}
	</div>
</div>
