<div class="form-hint-area" {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.form-hint-area {
		display: grid;
		background-color: rgba(var(--color-darkblue), 0.2);
		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;

		grid-template-columns: repeat(var(--hint-columns, 1), 1fr);
	}
</style>
