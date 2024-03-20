<script lang="ts">
	/**
	 * The checkboxes state.
	 */
	export let checked: boolean = false
</script>

<label class="checkbox-label">
	<span class="checkbox-container">
		<input
			type="checkbox"
			style="position: absolute; opacity: 0; pointer-events: none;"
			bind:checked
			{...$$restProps}
			on:change
		/>
		<span class="checkbox">
			<svg
				class="checkbox-icon"
				xmlns="http://www.w3.org/2000/svg"
				width="8"
				height="7"
				viewBox="0 0 8 7"
				fill="none"
			>
				<path d="M0.5 3L3 6L7.5 1" stroke="white" stroke-linecap="round" />
			</svg>
		</span>
	</span>
</label>

<style lang="scss">
	.checkbox-container {
		position: relative;
		width: 14px;
		height: 14px;
	}

	.checkbox {
		position: relative;
		display: inline-block;
		width: 14px;
		height: 14px;
		border: 1px solid rgba(255, 255, 255, 0.6);
		border-radius: 3px;
	}

	.checkbox-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		opacity: 0;
		transition: opacity ease 0.1s;
		transform: translate(-50%, -50%);
	}

	input[type='checkbox']:focus + .checkbox {
		border-color: white;
	}

	input[type='checkbox']:checked + .checkbox > .checkbox-icon {
		opacity: 1;
	}
</style>
