<script lang="ts">
	import { getContext, type Snippet } from 'svelte'
	import { ModalContext, type ModalContextData } from './context'
	import { melt } from '@melt-ui/svelte'

	interface Props {
		children?: Snippet
	}

	const { children }: Props = $props()

	const {
		elements: { title }
	} = getContext<ModalContextData>(ModalContext)
</script>

<div use:melt={$title} class="title">
	{@render children?.()}
</div>

<style lang="scss">
	.title {
		font-size: 28px;
		line-height: 120%;
		font-weight: 500;
		text-align: center;
	}
</style>
