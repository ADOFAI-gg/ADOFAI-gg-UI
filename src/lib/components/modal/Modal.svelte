<script lang="ts">
	import {
		createDialog,
		createSync,
		melt,
		type AnyMeltElement,
		type CreateDialogProps
	} from '@melt-ui/svelte'
	import { ModalContext, type ModalContextData } from '$lib/components/modal/context'
	import { setContext, type Snippet } from 'svelte'
	import ModalOverlay from './ModalOverlay.svelte'
	import ModalPopup from './ModalPopup.svelte'

	interface Props {
		trigger?: Snippet<[{ trigger: ModalContextData['elements']['trigger'] }]>
		children?: Snippet<[{ close: () => void }]>
		options?: Omit<CreateDialogProps, 'forceVisible'>
		open?: boolean
	}

	let { trigger, options = {}, children, open = $bindable(false) }: Props = $props()

	const modal = createDialog({
		forceVisible: true,
		...options
	})

	setContext(ModalContext, modal)

	const {
		elements: { trigger: triggerEl, portalled, overlay }
	} = modal

	const sync = createSync(modal.states)

	$effect(() => {
		sync.open(open, (v) => (open = v))
	})
</script>

{@render trigger?.({ trigger: triggerEl })}

{#if open}
	<div use:melt={$portalled}>
		<ModalOverlay>
			<ModalPopup>
				{@render children?.({
					close: () => {
						open = false
					}
				})}
			</ModalPopup>
		</ModalOverlay>
	</div>
{/if}
