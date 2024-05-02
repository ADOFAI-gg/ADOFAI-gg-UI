<div class="container-padder">
	<div class="container" {...$$restProps}>
		<slot />
	</div>
</div>

<style lang="scss">
	@import '../stylesheets/system/breakpoints';

	.container {
		width: 100%;
		margin: 0 auto;

		@each $name, $data in $breakpoints {
			// @media screen and (min-width: #{inspect(map-get($data, 'min-width'))}) {
			// 	max-width: calc(map-get($data, 'min-width'));
			// }
			@include breakpoint($name) {
				max-width: map-get($data, 'min-width');
			}
		}
	}

	.container-padder {
		padding: 0 24px;
	}
</style>
