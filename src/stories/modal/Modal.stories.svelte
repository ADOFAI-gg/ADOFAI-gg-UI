<script lang="ts" module>
	import ModalActions from '$lib/components/modal/ModalActions.svelte'
	import { Button, FormField, InputControl, Modal, ModalTitle } from '$lib/index'
	import { defineMeta } from '@storybook/addon-svelte-csf'

	const { Story } = defineMeta({
		title: 'Components/Modal'
	})
</script>

<Story name="Default">
	<Modal>
		{#snippet trigger({ trigger })}
			<Button variant="outlined" meltElement={trigger}>Click to open modal</Button>
		{/snippet}

		{#snippet children({ close })}
			<ModalTitle>Example Modal</ModalTitle>

			<FormField label="custom:Wow Field" error="custom:wow sans" modal>
				<InputControl />
			</FormField>

			<div>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odit deleniti facilis
				recusandae vero corrupti rem eos soluta obcaecati ullam repudiandae expedita quasi amet vel
				exercitationem laborum eaque, error facere! Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Sed odit deleniti facilis recusandae vero corrupti rem eos soluta
				obcaecati ullam repudiandae expedita quasi amet vel exercitationem laborum eaque, error
				facere! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odit deleniti facilis
				recusandae vero corrupti rem eos soluta obcaecati ullam repudiandae expedita quasi amet vel
				exercitationem laborum eaque, error facere! Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Sed odit deleniti facilis recusandae vero corrupti rem eos soluta
				obcaecati ullam repudiandae expedita quasi amet vel exercitationem laborum eaque, error
				facere! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odit deleniti facilis
				recusandae vero corrupti rem eos soluta obcaecati ullam repudiandae expedita quasi amet vel
				exercitationem laborum eaque, error facere! Lorem ipsum dolor, sit amet consectetur
				adipisicing elit. Sed odit deleniti facilis recusandae vero corrupti rem eos soluta
				obcaecati ullam repudiandae expedita quasi amet vel exercitationem laborum eaque, error
				facere! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed odit deleniti facilis
				recusandae vero corrupti rem eos soluta obcaecati ullam repudiandae expedita quasi amet vel
				exercitationem laborum eaque, error facere!
			</div>

			<ModalActions>
				{#snippet left()}
					<Button transparent onclick={close} size="md" variant="ghost-light">cancel</Button>
				{/snippet}

				{#snippet right()}
					<Button size="md">action</Button>
				{/snippet}
			</ModalActions>
		{/snippet}
	</Modal>
</Story>
