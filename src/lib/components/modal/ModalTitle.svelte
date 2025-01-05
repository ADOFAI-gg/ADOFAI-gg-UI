<script lang="ts">
	import { getContext, type Snippet } from 'svelte'
	import { ModalContext, type ModalContextData } from './context'
	import { melt } from '@melt-ui/svelte'

	interface Props {
		children?: Snippet
		subtitle?: Snippet
	}

	const { children, subtitle }: Props = $props()

	const {
		elements: { title }
	} = getContext<ModalContextData>(ModalContext)
</script>

<div>
	<div use:melt={$title} class="title">
		{@render children?.()}
	</div>
	{#if subtitle}
		<div class="subtitle">
			{@render subtitle()}
		</div>
	{/if}
</div>

<style lang="scss">
	.title {
		font-size: 28px;
		line-height: 120%;
		font-weight: 500;
		text-align: center;
	}
	.subtitle {
		font-size: 16px;
		font-weight: 400;
		line-height: 140%;
		margin-top: 8px;
		color: rgba(255, 255, 255, 0.8);
		text-align: center;
	}
</style>
