export interface User {
	displayName: string;
	avatarURL: string | null;
	isAdmin: boolean;
}

export type UserListItemModel =
	| {
			type: 'user';
			data: User;
			href?: string;
	  }
	| {
			type: 'group';
			name: string;
			data: UserListItemModel[];
	  };

export type UserListGroup = Extract<UserListItemModel, { type: 'group' }>;
