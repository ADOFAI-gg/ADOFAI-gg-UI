<script lang="ts" module>
	import Self from './component.svelte';
	import type { FilterControlProp } from '../../types.js';

	export { popover, value };
</script>

<script lang="ts">
	const { current }: FilterControlProp<string> = $props();
</script>

{#snippet popover(props: FilterControlProp<string>)}
	<Self {...props} />
{/snippet}

{#snippet value(value: string)}
	{value}
{/snippet}
