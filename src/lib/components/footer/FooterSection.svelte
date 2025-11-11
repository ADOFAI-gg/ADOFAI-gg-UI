<section class="footer-section">
	<div class="content">
		<slot />
	</div>
</section>

<style lang="scss">
	@use '../../stylesheets/system/breakpoints' as *;

	.footer-section {
		display: flex;
		width: 100%;
		flex-direction: column;

		@include breakpoint('sm') {
			flex-direction: row;
			align-items: center;
			gap: 8px;
		}
	}

	.content {
		display: flex;
		flex-direction: column;

		@include breakpoint('sm') {
			gap: 12px;
			flex-direction: row;
		}
	}
</style>
