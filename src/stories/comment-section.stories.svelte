<script lang="ts" module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CommentSection, {
		type DiscussionComment
	} from '../lib/components/comment/comment-section.svelte';
	const { Story } = defineMeta({
		title: 'Components/Comment/Discussion',
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let comments = $state<DiscussionComment[]>([
		{
			id: 'pinned',
			canDelete: true,
			author: { name: 'developer', avatar: null },
			pinned: true,
			timestamp: '3년 전',
			text: '지원하지 않는 환경에서 문제가 발생하면 알려 주세요.'
		},
		{
			id: 'discussion',
			canEdit: true,
			canDelete: true,
			author: { name: 'ppapman', avatar: null },
			timestamp: '두 시간 전',
			text: '모드 사용 후기\n1. 설치하기 편해요\n2. 다양한 기능을 제공합니다.\n3. 업데이트가 기대됩니다.\n긴 댓글은 더 보기를 눌러 확인할 수 있습니다.',
			replies: [
				{ id: 'reply', author: { name: 'developer', avatar: null }, text: '의견 감사합니다!' }
			]
		}
	]);
	function add(text: string, parentId?: string) {
		const comment = {
			id: crypto.randomUUID(),
			author: { name: 'ppapman', avatar: null },
			text,
			timestamp: '지금'
		};
		function insert(items: DiscussionComment[]): DiscussionComment[] {
			return items.map((item) =>
				item.id === parentId
					? { ...item, replies: [...(item.replies ?? []), comment] }
					: { ...item, replies: insert(item.replies ?? []) }
			);
		}
		comments = parentId ? insert(comments) : [...comments, comment];
	}
	function change(id: string, text?: string) {
		function update(items: DiscussionComment[]): DiscussionComment[] {
			return items.map((item) =>
				item.id === id
					? text === undefined
						? { ...item, deleted: true, text: '', author: { name: '삭제됨', avatar: null } }
						: { ...item, text }
					: { ...item, replies: update(item.replies ?? []) }
			);
		}
		comments = update(comments);
	}
</script>

<Story name="Thread with composer">
	<div style="max-width:858px;width:100%;padding:24px">
		<CommentSection
			{comments}
			author={{ name: 'ppapman', avatar: null }}
			onsubmit={add}
			canPin
			onpin={(id, pinned) => {
				comments = comments.map((comment) =>
					comment.id === id ? { ...comment, pinned } : comment
				);
			}}
			onupdate={(id, text) => change(id, text)}
			ondelete={(id) => change(id)}
		/>
	</div>
</Story>
<Story name="Unavailable"><CommentSection /></Story>
<Story name="Failed submission"
	><CommentSection
		author={{ name: 'ppapman', avatar: null }}
		onsubmit={() => {
			throw new Error('Unavailable');
		}}
	/></Story
>
