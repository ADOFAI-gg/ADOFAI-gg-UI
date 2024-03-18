<script lang="ts" context="module">
	import { generateIconStyles } from '$lib/assets/index.js'

	const css = generateIconStyles()
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html css}
</svelte:head>
