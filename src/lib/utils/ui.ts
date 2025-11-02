import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// utility from shadcn

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
