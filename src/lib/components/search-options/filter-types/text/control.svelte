<script lang="ts">
	import { FormControl, Input, Label } from '$lib/components/form/index.js';
	import type { FilterControlProp, TextFilterTypeOptions } from '../../types.js';

	const { value, setValue, options }: FilterControlProp<string, TextFilterTypeOptions> = $props();

	const id = $props.id();
</script>

<FormControl>
	<Label for={id}>{options.label}</Label>
	<Input
		{id}
		placeholder={options.placeholder}
		{value}
		oninput={(e) => setValue(e.currentTarget.value)}
	/>
</FormControl>
