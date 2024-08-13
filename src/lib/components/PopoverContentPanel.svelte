<div class="popover-content-panel">
	<slot />
</div>

<style lang="scss">
	.popover-content-panel {
		padding: 18px;

		display: flex;
		flex-direction: column;
		gap: 8px;

		background: #12152c;
		box-shadow:
			0px 0px 12px rgba(0, 0, 0, 0.2),
			0px 0px 24px rgba(0, 0, 0, 0.2);
		border-radius: 16px;
	}
</style>
