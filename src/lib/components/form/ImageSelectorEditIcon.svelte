<script lang="ts">
	import { emptyMeltElement, melt, type AnyMeltElement } from '@melt-ui/svelte'

	// @ts-expect-error
	export let meltElement: AnyMeltElement = emptyMeltElement
</script>

<button class="image-selector-edit-icon" use:melt={$meltElement} {...$$restProps}>
	<slot />
</button>

<style lang="scss">
	.image-selector-edit-icon {
		position: absolute;
		top: 8px;
		right: 8px;
		background-color: rgba(var(--color-darkblue), 0.4);
		width: 36px;
		height: 36px;
		border-radius: 38px;

		display: flex;
		justify-content: center;
		align-items: center;

		cursor: pointer;
		transition: background-color ease 0.2s;
		z-index: 100;

		&:not(:disabled):hover {
			background-color: rgba(var(--color-darkblue), 0.6);
		}

		&:disabled {
			cursor: inherit;
		}
	}
</style>
