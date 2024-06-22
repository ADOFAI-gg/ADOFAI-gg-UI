<script lang="ts">
	import type { CheckboxSize } from '$lib/types.js'

	/**
	 * The checkboxes state.
	 */
	export let checked: boolean = false

	export let size: CheckboxSize = 'md'
</script>

<label class="checkbox-label checkbox-{size}">
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
				width="10"
				height="8"
				class="check-icon"
				viewBox="0 0 10 8"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 4L3.8 7L9 1"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>

			<svg
				class="indeterminate-icon"
				width="10"
				height="2"
				viewBox="0 0 10 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1 1L9 1"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</span>
	</span>
</label>

<style lang="scss">
	.checkbox-sm {
		--checkbox-size: 16px;
		--checkbox-icon-size: 8px;
		--checkbox-radius: 4px;
	}

	.checkbox-md {
		--checkbox-size: 20px;
		--checkbox-icon-size: 10px;
		--checkbox-radius: 6px;
	}

	.checkbox-lg {
		--checkbox-size: 24px;
		--checkbox-icon-size: 12px;
		--checkbox-radius: 6px;
	}

	.checkbox-container {
		position: relative;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		display: flex;
	}

	.checkbox {
		position: relative;
		display: inline-block;
		width: var(--checkbox-size);
		height: var(--checkbox-size);
		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--checkbox-radius);
	}

	.check-icon,
	.indeterminate-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		opacity: 0;
		transition: opacity ease 0.1s;
		transform: translate(-50%, -50%);
		width: var(--checkbox-icon-size);
		height: var(--checkbox-icon-size);
	}

	input[type='checkbox']:focus + .checkbox {
		border-color: rgba(255, 255, 255, 0.6);
	}

	input[type='checkbox']:checked + .checkbox > .check-icon {
		opacity: 1;
	}

	input[type='checkbox']:indeterminate + .checkbox > .indeterminate-icon {
		opacity: 1;
	}
</style>
