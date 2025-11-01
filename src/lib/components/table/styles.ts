import { tv } from 'tailwind-variants';

export const { head, body, cell, header, root, row } = tv({
	slots: {
		root: '',
		header: 'border-b-2',
		body: '',
		row: 'border-b',
		head: 'font-semibold',
		cell: ''
	},
	compoundSlots: [
		{
			slots: ['head', 'cell'],
			class: 'text-sm text-left py-3 px-1'
		},
		{
			slots: ['header', 'row'],
			class: 'border-white/10'
		}
	]
})();
