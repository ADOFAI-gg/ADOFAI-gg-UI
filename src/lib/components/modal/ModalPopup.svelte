<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type ModalPopupProps = {
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { children }: ModalPopupProps = $props();
</script>

<DialogPrimitive.Content
	class="modal-popup data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:slide-in-from-bottom-4 data-[state=closed]:slide-out-to-bottom-4"
>
	{@render children?.()}
</DialogPrimitive.Content>

<style>
	:global(.modal-popup) {
		background-color: var(--color-gg-darkblue, #03061c);
		padding: 32px;
		display: flex;
		flex-direction: column;
		gap: 24px;
		pointer-events: all;

		width: 100%;
		max-height: calc(100% - 64px);
		overflow-y: auto;

		align-self: flex-end;
		border-radius: 12px 12px 0 0;
	}

	@media (min-width: 640px) {
		:global(.modal-popup) {
			border-radius: 12px;
			max-width: 564px;
			margin: 18px;
			align-self: center;
		}
	}
</style>
