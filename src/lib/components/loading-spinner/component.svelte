<script lang="ts" module>
	export type LoadingSpinnerProps = {
		size?: number;
	};
</script>

<script lang="ts">
	const { size = 24 }: LoadingSpinnerProps = $props();
</script>

<div class="flex justify-center">
	<svg
		class="animate-spin"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clip-path="url(#clip0_2104_2)">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12H20C20 7.58173 16.4183 4.00001 12 4.00001C7.58173 4.00001 4.00001 7.58173 4.00001 12C4.00001 16.4183 7.58173 20 12 20V24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519943 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19295 3.51472 3.51472C5.19295 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.0051994 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316Z"
				fill="white"
			/>
		</g>
		<defs>
			<clipPath id="clip0_2104_2">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</svg>
</div>
