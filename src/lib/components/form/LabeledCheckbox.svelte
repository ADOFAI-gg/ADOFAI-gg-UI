<script lang="ts">
	import { Checkbox, type CheckboxSize, Translation } from '$lib/index.js'

	export let checked: boolean = false
	export let size: CheckboxSize = 'md'
	export let required = false
</script>

<label class="labeled-checkbox labeled-checkbox-{size}">
	<Checkbox bind:checked {size} {...$$restProps} />

	<span class="label">
		{#if required}
			<span class="required">
				<Translation key="common:form-required" />
			</span>
		{/if}
		<slot />
	</span>
</label>

<style lang="scss">
	.labeled-checkbox-sm {
		--label-size: 14px;
	}

	.labeled-checkbox-md {
		--label-size: 16px;
	}

	.labeled-checkbox-lg {
		--label-size: 18px;
	}

	.labeled-checkbox {
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: var(--label-size);
	}

	.required {
		color: rgba(var(--color-red), 1);
	}
</style>
