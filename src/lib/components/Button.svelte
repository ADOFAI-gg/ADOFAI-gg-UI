<script lang="ts">
	import type { ButtonSize, ButtonStyle } from '$lib/types.js'
	import { useActions, type ActionArray } from 'svelte-component-actions'
	import Icon from './Icon.svelte'

	export let use: ActionArray = []

	export let style: ButtonStyle = 'primary'
	export let size: ButtonSize = 'lg'

	export let leftIcon: string | null = null
	export let rightIcon: string | null = null
	export let iconOnly: boolean = false
</script>

<button
	use:useActions={use}
	class="button button-style-{style} button-size-{size}"
	class:icon-only={iconOnly}
	on:click
	{...$$restProps}
>
	{#if leftIcon}
		<Icon alt="icon" icon={leftIcon} size={24} />
	{/if}
	<slot />
	{#if rightIcon}
		<Icon alt="icon" icon={rightIcon} size={24} />
	{/if}
</button>

<style lang="scss">
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		font-weight: 600;
		display: flex;
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

		box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) inset;

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
		gap: 16px;

		&.icon-only {
			padding: 12px;
		}
	}

	.button-size-md {
		padding: 8px 16px;
		font-size: 14px;
		gap: 8px;

		&.icon-only {
			padding: 8px;
		}
	}

	.button-size-sm {
		padding: 6px 12px;
		font-size: 12px;
		gap: 6px;

		&.icon-only {
			padding: 6px;
		}
	}
</style>
