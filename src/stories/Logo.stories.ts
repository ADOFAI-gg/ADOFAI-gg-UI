import type { Meta, StoryObj } from '@storybook/svelte'
import { Logo } from '$lib/index.js'

const meta = {
	// @ts-expect-error type issue
	component: Logo,
	title: 'Components/Logo'
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		width: 480
	}
}
