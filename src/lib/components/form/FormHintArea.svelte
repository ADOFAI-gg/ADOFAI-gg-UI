<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		modal?: boolean
		children?: Snippet
	}

	const { modal, children }: Props = $props()
</script>

<div class="form-hint-area" class:modal>
	{@render children?.()}
</div>

<style lang="scss">
	@use '../../stylesheets/system/colors' as *;

	.form-hint-area {
		display: grid;
		background-color: rgba($darkblue, 0.2);
		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;

		grid-template-columns: repeat(var(--hint-columns, 1), 1fr);

		&.modal {
			background-color: rgba(255, 255, 255, 0.05);
		}
	}
</style>
