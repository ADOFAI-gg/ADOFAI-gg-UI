<script lang="ts" module>
	import { Comment, CommentList, CommentText, Button } from '$lib/index.js';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ganjangFactory from './assets/ganjangfactory.png';

	const { Story } = defineMeta({
		title: 'Components/Comment',
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Comment
		author={{ name: 'GanjangFactory', avatar: ganjangFactory }}
		timestamp={new Date('2026-01-01')}
	>
		<CommentText text="This is a comment with a preserved master-compatible author shape." />
	</Comment>
</Story>

<Story name="List With Actions">
	<CommentList>
		<Comment author={{ name: 'GanjangFactory', avatar: ganjangFactory }}>
			{@const text = 'A comment can render an action area below its content.'}
			<CommentText {text} />
			{#snippet actions()}
				<Button size="sm" variant="ghostLight" onclick={() => {}}>Reply</Button>
			{/snippet}
		</Comment>
		<Comment author={{ name: 'Anonymous', avatar: null }}>
			<CommentText text="Comments without an avatar still keep the same layout." />
		</Comment>
	</CommentList>
</Story>
