<script lang="ts" module>
	import {
		Container,
		Icon,
		IconButton,
		IconProvider,
		PanelTitle,
		PopoverContentPanel
	} from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'Components/Compatibility Atoms',
		tags: ['autodocs']
	});
</script>

<Story name="Container">
	<Container topMargin>
		<PopoverContentPanel>
			<PanelTitle>Master-compatible content panel</PanelTitle>
			<p>Container, PopoverContentPanel, and PanelTitle are available from the public API.</p>
		</PopoverContentPanel>
	</Container>
</Story>

<Story name="Icons">
	<IconProvider>
		<div class="gap-4 flex items-center">
			<Icon icon="music" size={24} alt="Music" />
			<IconButton aria-label="Favorite" onclick={() => {}}>
				<Icon icon="heart" size={20} alt="Favorite" />
			</IconButton>
		</div>
	</IconProvider>
</Story>
