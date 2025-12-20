<script lang="ts">
	import type { FilterControlProp } from '../../types.js';

	const { value, setValue }: FilterControlProp<string> = $props();
</script>

<input
	type="text"
	{value}
	oninput={(e) => setValue(e.currentTarget.value)}
	class="text-white bg-transparent"
/>
