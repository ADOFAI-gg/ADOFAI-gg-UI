import type { Meta, StoryObj } from '@storybook/svelte'
import { Nav } from '$lib/index.js'
import { dummyAdminUser, dummyUser } from '../dummyData.js'

const meta = {
	// @ts-expect-error type issue
	component: Nav,
	title: 'Components/Nav'
} satisfies Meta<typeof Nav>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		user: null
	}
}

export const SignedIn: Story = {
	args: {
		user: dummyUser
	}
}

export const SignedInAsAdmin: Story = {
	args: {
		user: dummyAdminUser
	}
}
