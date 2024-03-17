import type { Meta, StoryObj } from '@storybook/svelte'
import { Nav } from '$lib'

const meta = {
	// @ts-expect-error type issue
	component: Nav
} satisfies Meta<typeof Nav>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {}
}
