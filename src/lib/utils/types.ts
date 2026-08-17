export type UserProp = {
	name: string;
	avatar: string | null;
};

export type SelectOption<Value, CustomData = unknown> = {
	value: Value;
	label: string;
	subtitle?: string;
	icon?: string;
	disabled?: boolean;
	customData?: CustomData;
	color?: 'default' | 'blue';
};

export type SelectGroup<Value, CustomData = unknown> = {
	title?: string;
	options: SelectOption<Value, CustomData>[];
};
