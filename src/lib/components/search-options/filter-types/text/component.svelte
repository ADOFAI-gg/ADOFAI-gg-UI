<script lang="ts" module>
	import type { FilterControlProp } from '../../types.js';
	import Control from './control.svelte';

	export { popover, value };
</script>

{#snippet popover(props: FilterControlProp<string>)}
	<Control {...props} />
{/snippet}

{#snippet value(value: string)}
	{value}
{/snippet}
