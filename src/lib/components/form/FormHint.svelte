<div class="hint">
	<slot />
</div>

<style lang="scss">
	.hint {
		display: flex;

		color: rgba(var(--color-red), 1);
		font-weight: 500;
		font-size: 14px;
		line-height: 14px;

		align-items: center;
		gap: 6px;

		&::before {
			content: '';
			width: 8px;
			height: 8px;
			background-color: currentColor;
			border-radius: 4px;
		}
	}
</style>
