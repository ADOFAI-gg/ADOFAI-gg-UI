<script lang="ts" context="module">
	import { NavPopup } from '$lib/index.js'

	export const meta = {
		title: 'Components/Nav/Popup/Nav Popup',
		component: NavPopup
	}
</script>

<script lang="ts">
	import { Story } from '@storybook/addon-svelte-csf'
</script>

<Story name="Default">
	<div class="preview-container">
		<NavPopup />
	</div>
</Story>

<style lang="scss">
	.preview-container {
		display: flex;
		justify-content: flex-end;
	}
</style>
