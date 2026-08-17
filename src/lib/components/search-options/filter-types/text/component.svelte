<script lang="ts" module>
	import type { FilterControlProp, TextFilterTypeOptions } from '../../types.js';
	import Control from './control.svelte';

	export { popover, value };
</script>

{#snippet popover(props: FilterControlProp<string, TextFilterTypeOptions>)}
	<Control {...props} />
{/snippet}

{#snippet value(value: string)}
	{value}
{/snippet}
