<script lang="ts" module>
	import { Dialog as DialogPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';

	import type { ModalChildren, ModalClose } from './context.js';

	export type ModalTrigger = Record<string, unknown>;

	export type ModalOptions = Omit<DialogPrimitive.RootProps, 'open' | 'children'> &
		Record<string, unknown>;

	export type ModalProps = {
		trigger?: Snippet<[{ trigger: ModalTrigger }]>;
		children?: ModalChildren;
		options?: ModalOptions;
		open?: boolean;
	};
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	import { ModalContext, type ModalContextData } from './context.js';
	import ModalOverlay from './ModalOverlay.svelte';
	import ModalPopup from './ModalPopup.svelte';

	let { trigger, options = {}, children, open = $bindable(false) }: ModalProps = $props();

	const close: ModalClose = () => {
		open = false;
	};

	setContext<ModalContextData>(ModalContext, { close });
</script>

<DialogPrimitive.Root {...options} bind:open>
	{#if trigger}
		<DialogPrimitive.Trigger>
			{#snippet child({ props })}
				{@render trigger({ trigger: props })}
			{/snippet}
		</DialogPrimitive.Trigger>
	{/if}

	<DialogPrimitive.Portal>
		<ModalOverlay>
			<ModalPopup>
				{@render children?.({ close })}
			</ModalPopup>
		</ModalOverlay>
	</DialogPrimitive.Portal>
</DialogPrimitive.Root>
