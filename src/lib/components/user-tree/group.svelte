<script lang="ts" module>
	import Icon from '@iconify/svelte';
	import { Collapsible, type WithChildren } from 'bits-ui';
	import Root from './root.svelte';
	import { cn } from '$lib/utils/ui.js';

	export type GroupProps = WithChildren<{
		name: string;
	}>;
</script>

<script lang="ts">
	const { name, children }: GroupProps = $props();
</script>

<Collapsible.Root>
	<Collapsible.Trigger>
		{#snippet child({ props })}
			<li class="gap-1 group flex cursor-pointer items-center select-none" {...props}>
				<div class="w-5 flex justify-center">
					<Icon
						icon="gg:chevron-down"
						class="size-4.5 opacity-60 transition group-hover:opacity-100 group-data-[state='open']:rotate-180"
					/>
				</div>
				<span>
					{name}
				</span>
			</li>
		{/snippet}
	</Collapsible.Trigger>
	<Collapsible.Content
		hiddenUntilFound
		class={cn(
			'pl-6 overflow-hidden',
			'data-[state=open]:animate-collapsible-in',
			'data-[state=closed]:animate-collapsible-out'
		)}
	>
		<Root class="mt-2">
			{@render children?.()}
		</Root>
	</Collapsible.Content>
</Collapsible.Root>
