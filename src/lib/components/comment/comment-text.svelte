<script lang="ts">
	interface Props {
		text: string
	}

	const { text }: Props = $props()
</script>

<div class="comment-text">{text}</div>

<style lang="scss">
	.comment-text {
		white-space: pre-wrap;
	}
</style>
