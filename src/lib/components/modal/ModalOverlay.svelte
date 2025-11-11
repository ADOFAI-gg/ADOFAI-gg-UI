<script lang="ts">
	import { melt } from '@melt-ui/svelte'
	import { ModalContext, type ModalContextData } from '$lib/components/modal/context'
	import { getContext, type Snippet } from 'svelte'
	import { fade, fly } from 'svelte/transition'

	interface Props {
		children?: Snippet
	}

	let { children }: Props = $props()

	const {
		elements: { overlay }
	} = getContext<ModalContextData>(ModalContext)
</script>

<div class="modal-overlay">
	<div class="backdrop" use:melt={$overlay} transition:fade={{ duration: 150 }}></div>
	<div class="content" transition:fly={{ duration: 400, y: 48, opacity: 0 }}>
		{@render children?.()}
	</div>
</div>

<style lang="scss">
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

	.backdrop {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>
