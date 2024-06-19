<script lang="ts">
	export let type: 'hint' | 'error'
</script>

<div class="hint-container {type}">
	<div class="dot"></div>
	<slot />
</div>

<style lang="scss">
	.dot {
		width: 8px;
		height: 8px;
		border-radius: 4px;
	}

	.hint .dot {
		background-color: rgba(255, 255, 255, 0.4);
	}

	.error .dot {
		background-color: rgba(var(--color-red), 1);
	}

	.hint-container {
		&.hint {
			color: white;
		}
		&.error {
			color: rgba(var(--color-red), 1);
		}

		padding: 12px;

		display: flex;

		font-weight: 500;
		font-size: 14px;
		line-height: 14px;

		align-items: center;
		gap: 8px;
	}
</style>
