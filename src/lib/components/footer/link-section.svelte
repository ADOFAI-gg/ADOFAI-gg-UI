<script lang="ts">
	import type { WithChildren } from 'bits-ui';

	type Props = WithChildren;

	const { children }: Props = $props();
</script>

<div class="space-x-3 flex flex-wrap">
	{@render children?.()}
</div>
