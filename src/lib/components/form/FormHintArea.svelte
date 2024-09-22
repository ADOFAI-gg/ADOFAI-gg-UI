<div class="form-hint-area" {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	@import '../../stylesheets/system/colors';

	.form-hint-area {
		display: grid;
		background-color: rgba($darkblue, 0.2);
		border-bottom-left-radius: 6px;
		border-bottom-right-radius: 6px;

		grid-template-columns: repeat(var(--hint-columns, 1), 1fr);
	}
</style>
