import type { User } from '../lib/types.js'
import GanjangFactory from './assets/ganjangfactory.png'

export const dummyUser: User = {
	avatarURL: GanjangFactory,
	isAdmin: false,
	displayName: 'GanjangFactory'
}

export const dummyAdminUser: User = {
	...dummyUser,
	isAdmin: true
}
