<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type ModalOverlayProps = {
		children?: Snippet;
	};
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { children }: ModalOverlayProps = $props();
</script>

<div class="modal-overlay">
	<DialogPrimitive.Overlay
		class="backdrop data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
	/>
	<div class="content">
		{@render children?.()}
	</div>
</div>

<style>
	.modal-overlay {
		position: fixed;
		z-index: 100;
		inset: 0;
	}

	.content {
		position: fixed;
		inset: 0;
		display: flex;
		justify-content: center;
		pointer-events: none;
	}

	:global(.backdrop) {
		position: fixed;
		inset: 0;
		background-color: rgb(0 0 0 / 30%);
	}
</style>
