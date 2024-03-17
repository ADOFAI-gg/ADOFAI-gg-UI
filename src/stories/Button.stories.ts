import type { Meta, StoryObj } from '@storybook/svelte'
import { RoundedOutlineButton } from '$lib'

const meta = {
	title: 'Stories/Button'
} satisfies Meta

export default meta

type Story = StoryObj

export const RoundedOutline: Story = {
	// @ts-expect-error type issue
	render: () => RoundedOutlineButton,
	args: {}
}
