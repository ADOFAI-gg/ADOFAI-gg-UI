<script lang="ts">
	import { Icon, Menu, MenuItem, Translation } from '$lib/index.js'
	import { createEventDispatcher } from 'svelte'

	export let aspectRatio = 1

	export let src = ''
	export let loading = false
	export let disabled = false

	const dispatch = createEventDispatcher()

	let inputRef: HTMLInputElement
	let files: FileList

	const edit = () => {
		inputRef.click()
	}

	$: {
		if (inputRef && files) {
			const f = files.item(0)

			dispatch('edit', f)

			inputRef.value = ''
		}
	}
</script>

<div class="image-selector {disabled ? 'disabled' : ''}" style="aspect-ratio: {aspectRatio};">
	<input type="file" accept="image/*" bind:files hidden bind:this={inputRef} />

	{#if src}
		<div class="image" style="--url: url('{src}');" />
	{/if}

	<Menu placement="bottom" let:close>
		<button slot="button" let:buttonRef use:buttonRef class="edit-icon" disabled={loading}>
			{#if loading}
				<span class="loading-icon">
					<Icon icon="loading" size={24} alt="loading" />
				</span>
			{:else}
				<Icon icon="pencil" size={18} alt="edit" />
			{/if}
		</button>

		<MenuItem
			on:click={() => {
				edit()
				close()
			}}
		>
			<Icon slot="icon" size={16} alt="icon" icon="pencil" />

			<Translation key="common:edit" />
		</MenuItem>

		{#if src}
			<MenuItem
				variant="danger"
				on:click={() => {
					close()
					dispatch('delete')
				}}
			>
				<Icon slot="icon" size={16} alt="icon" icon="trash" />

				<Translation key="common:delete" />
			</MenuItem>
		{/if}
	</Menu>
</div>

<style lang="scss">
	.image-selector {
		width: 100%;
		background-color: white;
		position: relative;

		border-radius: 8px;

		&.disabled .edit-icon {
			display: none;
		}
	}

	.edit-icon {
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

	.image {
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-image: var(--url);
		border-radius: 8px;
		z-index: 10;
		position: absolute;
	}

	.loading-icon {
		animation: spin 0.5s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
