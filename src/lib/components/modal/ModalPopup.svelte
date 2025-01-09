<script lang="ts">
	import { getContext, type Snippet } from 'svelte'
	import { ModalContext, type ModalContextData } from './context'
	import { melt } from '@melt-ui/svelte'

	interface Props {
		children?: Snippet
	}

	const { children }: Props = $props()

	const {
		elements: { content }
	} = getContext<ModalContextData>(ModalContext)
</script>

<div class="modal-popup" use:melt={$content}>
	{@render children?.()}
</div>

<style lang="scss">
	@use '../../stylesheets/system/colors' as *;
	@use '../../stylesheets/system/breakpoints' as *;

	.modal-popup {
		background-color: $darkblue;
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

		@include breakpoint('sm') {
			border-radius: 12px;
			max-width: 564px;
			margin: 18px;
			align-self: center;
		}
	}
</style>
