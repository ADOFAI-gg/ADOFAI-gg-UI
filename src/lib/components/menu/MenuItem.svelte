<script lang="ts">
	export let noIcon = false
	export let variant: 'default' | 'danger' = 'default'
</script>

<button on:click class="menu-item menu-{variant}">
	{#if !noIcon}
		<div class="icon">
			<slot name="icon" />
		</div>
	{/if}

	<slot />
</button>

<style lang="scss">
	.menu-default {
		--menu-item-color: 255, 255, 255;
		color: white;
	}

	.menu-danger {
		--menu-item-color: var(--color-red);
		color: rgba(var(--color-red), 1);
	}

	.menu-item {
		height: 32px;
		padding: 0 16px;
		gap: 16px;
		min-width: 180px;

		cursor: pointer;
		display: flex;
		align-items: center;

		transition: background-color ease 0.2s;

		background-color: rgba(var(--menu-item-color), 0);

		&:hover {
			background-color: rgba(var(--menu-item-color), 0.2);
		}
	}

	.icon {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}
</style>
