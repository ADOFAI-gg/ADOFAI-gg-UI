<script lang="ts" module>
	import { Footer, Nav, Scaffolding } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Scaffolding',
		component: Scaffolding,
		parameters: {
			layout: 'fullscreen'
		}
	});
</script>

{#snippet nav()}
	<Nav.Root>
		{#snippet menuPopupExtra()}
			<Nav.MenuItem>Test</Nav.MenuItem>
		{/snippet}
	</Nav.Root>
{/snippet}

{#snippet content()}
	<main class="gg-container py-8 mx-auto">
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda laborum deleniti incidunt
		neque laboriosam, saepe earum iure nihil sint veniam autem? Esse numquam ea porro accusantium
		labore expedita modi omnis.
	</main>
{/snippet}

{#snippet footer()}
	<Footer />
{/snippet}

<Story name="Default" args={{ nav, content, footer }} />

{#snippet expNav()}
	<div class="border-gg-red p-4 border">NAV</div>
{/snippet}

{#snippet expContent()}
	<div class="border-gg-blue p-4 grow border">CONTENT</div>
{/snippet}

{#snippet expFooter()}
	<div class="border-gg-cyan p-4 border">FOOTER</div>
{/snippet}

<Story name="Explaination" args={{ nav: expNav, content: expContent, footer: expFooter }} />
