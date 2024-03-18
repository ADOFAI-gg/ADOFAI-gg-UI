<button on:click class="nav-popup-item">
	<slot />
</button>

<style lang="scss">
	.nav-popup-item {
		height: 36px;
		font-size: 16px;
		display: flex;
		padding: 0 8px;
		align-items: center;

		transition: background ease 0.2s;
		border-radius: 4px;

		&:hover {
			background-color: rgba(255, 255, 255, 0.2);
		}
	}
</style>
