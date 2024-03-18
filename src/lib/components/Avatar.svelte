<script lang="ts">
	export let size: number
	export let src: string | null

	let loaded = false

	$: {
		src // watch for change
		loaded = false
	}
</script>

<div style="--avatar-size: {size}px;" class="avatar">
	{#if src}
		<img
			class:loaded
			{src}
			on:load={() => {
				loaded = true
			}}
			class="image"
			alt="Avatar"
			draggable="false"
		/>
	{:else}
		<div class="avatar-placeholder"></div>
	{/if}
</div>

<style lang="scss">
	.avatar {
		width: var(--avatar-size);
		height: var(--avatar-size);
		border-radius: calc(var(--avatar-size) / 2);

		overflow: hidden;
	}

	.avatar-placeholder {
		width: 100%;
		height: 100%;

		background-color: rgba(255, 255, 255, 0.4);
	}

	.image {
		width: var(--avatar-size);
		height: var(--avatar-size);

		opacity: 0;
		transition: opacity ease 0.2s;
		user-select: none;

		&.loaded {
			opacity: 1;
		}
	}
</style>
