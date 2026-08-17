<script lang="ts" module>
	import type { Snippet } from 'svelte';

	export type ModalTitleProps = {
		children?: Snippet;
		subtitle?: Snippet;
	};
</script>

<script lang="ts">
	import { Dialog as DialogPrimitive } from 'bits-ui';

	let { children, subtitle }: ModalTitleProps = $props();
</script>

<div>
	<DialogPrimitive.Title class="title">
		{@render children?.()}
	</DialogPrimitive.Title>
	{#if subtitle}
		<DialogPrimitive.Description class="subtitle">
			{@render subtitle()}
		</DialogPrimitive.Description>
	{/if}
</div>

<style>
	:global(.title) {
		font-size: 28px;
		line-height: 120%;
		font-weight: 500;
		text-align: center;
	}

	:global(.subtitle) {
		font-size: 16px;
		font-weight: 400;
		line-height: 140%;
		margin-top: 8px;
		color: rgb(255 255 255 / 80%);
		text-align: center;
	}
</style>
