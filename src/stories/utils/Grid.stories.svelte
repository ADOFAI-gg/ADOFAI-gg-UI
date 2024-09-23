<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Utils/Grid'
	})
</script>

<Story name="Default">
	<div class="grid">
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
		<div class="col"></div>
	</div>
</Story>

<style lang="scss">
	.col {
		height: 48px;
		background-color: rgba(255, 0, 0, 0.4);
	}
</style>
