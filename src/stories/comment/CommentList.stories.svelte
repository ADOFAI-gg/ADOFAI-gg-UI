<script lang="ts" module>
	import Comment from '$lib/components/comment/comment.svelte'
	import { CommentList } from '$lib/index'
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import { dummyUser } from '../dummyData'
	import CommentText from '$lib/components/comment/comment-text.svelte'
	import Button from '$lib/components/Button.svelte'

	const { Story } = defineMeta({
		title: 'Components/Comment List'
	})
</script>

<Story name="Default">
	<CommentList>
		<Comment author={dummyUser}>
			<CommentText
				text={'이맵의 킬포 3가지\n1. 개지리는 이펙트\n2. 엄청난 난이도, 그냥 깨지 말라고 만든 맵\n3. 극후반 법진이 8비트인데 기본 브픔이 2021이라 8비트가 4042브픔임'}
			/>

			{#snippet actions()}
				<Button size="sm" variant="ghost-primary">Some Action</Button>
			{/snippet}
		</Comment>
	</CommentList>
</Story>
