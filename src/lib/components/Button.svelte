<script lang="ts">
	import type { ButtonSize, ButtonStyle } from '$lib/types.js'

	export let style: ButtonStyle = 'primary'
	export let size: ButtonSize = 'lg'
</script>

<button class="button button-style-{style} button-size-{size}" on:click {...$$restProps}>
	<slot />
</button>

<style lang="scss">
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		font-weight: 600;
	}

	/* Styles */

	.button-style-primary,
	.button-style-danger {
		transition: background-color ease 0.2s;

		&:disabled {
			background-color: rgba(255, 255, 255, 0.1);
			color: rgba(255, 255, 255, 0.4);
		}
	}

	.button-style-primary:not(:disabled) {
		background-color: #3b84f1;

		&:hover,
		&:focus {
			background-color: #337ae3;
		}

		&:active {
			background-color: #276bcf;
		}
	}

	.button-style-danger:not(:disabled) {
		background-color: #f54f51;

		&:hover,
		&:focus {
			background-color: #de4446;
		}

		&:active {
			background-color: #cb393b;
		}
	}

	.button-style-ghost-light,
	.button-style-ghost-dark {
		transition: background-color ease 0.2s;

		&:disabled {
			color: rgba(255, 255, 255, 0.4);
		}
	}

	.button-style-ghost-light:not(:disabled) {
		background-color: rgba(255, 255, 255, 0);

		&:hover,
		&:focus {
			background-color: rgba(255, 255, 255, 0.1);
		}

		&:active {
			background-color: rgba(255, 255, 255, 0.2);
		}
	}

	.button-style-ghost-dark:not(:disabled) {
		background-color: rgba(0, 2, 15, 0);

		&:hover,
		&:focus {
			background-color: rgba(0, 2, 15, 0.1);
		}

		&:active {
			background-color: rgba(0, 2, 15, 0.2);
		}
	}

	.button-style-outlined {
		transition:
			border ease 0.2s,
			background-color ease 0.2s,
			color ease 0.2s;

		border: 1px solid rgba(255, 255, 255, 0.2);

		&:disabled {
			background-color: rgba(255, 255, 255, 0);
			color: rgba(255, 255, 255, 0.4);
		}

		&:not(:disabled) {
			color: white;

			&:hover,
			&:focus {
				background-color: rgba(255, 255, 255, 0.1);
			}

			&:active {
				background-color: white;
				color: black;
			}
		}
	}

	/* Sizes */

	.button-size-lg {
		padding: 12px 24px;
		font-size: 16px;
	}

	.button-size-md {
		padding: 8px 16px;
		font-size: 14px;
	}

	.button-size-sm {
		padding: 6px 12px;
		font-size: 12px;
	}
</style>
