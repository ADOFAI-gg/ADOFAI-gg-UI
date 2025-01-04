<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		type: 'hint' | 'error'
		children?: Snippet
	}

	const { type, children }: Props = $props()
</script>

<div class="hint-container {type}">
	<div class="dot"></div>
	{@render children?.()}
</div>

<style lang="scss">
	@use '../../stylesheets/system/colors' as *;

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 4px;
	}

	.hint .dot {
		background-color: rgba(255, 255, 255, 0.4);
	}

	.error .dot {
		background-color: rgba($red, 1);
	}

	.hint-container {
		&.hint {
			color: white;
		}
		&.error {
			color: rgba($red, 1);
		}

		& {
			padding: 12px;

			display: flex;

			font-weight: 500;
			font-size: 14px;
			line-height: 14px;

			align-items: center;
			gap: 8px;
		}
	}
</style>
