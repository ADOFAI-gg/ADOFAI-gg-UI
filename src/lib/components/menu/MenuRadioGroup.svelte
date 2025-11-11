<script lang="ts">
	import { getContext, setContext, type Snippet } from 'svelte'
	import { MenuContext, MenuRadioContext, type MenuContextData } from './symbols'
	import { createSync, melt } from '@melt-ui/svelte'

	interface Props {
		value?: string | null
		defaultValue?: string
		onchange?: (value: string | null) => void
		children: Snippet
	}

	let { value = $bindable(null), onchange, children, defaultValue }: Props = $props()

	const {
		builders: { createMenuRadioGroup }
	} = getContext<MenuContextData>(MenuContext)
	const group = createMenuRadioGroup({
		defaultValue,
		onValueChange: (v) => {
			onchange?.(v.next)
			return v.next
		}
	})

	setContext(MenuRadioContext, group)

	const sync = createSync(group.states)

	const {
		elements: { radioGroup }
	} = group

	$effect(() => {
		sync.value(value, (newValue) => (value = newValue))
	})
</script>

<div use:melt={$radioGroup}>
	{@render children()}
</div>
