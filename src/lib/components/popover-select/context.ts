export const PopoverSelectContext = Symbol('popover select');
export type PopoverSelectContextType = {
	select: (value: string) => void;
	hasValue: boolean;
	value: { current: string };
};
