import { flushSync } from 'svelte';

export const runViewTransition = (callback: () => void) => {
	if (!document.startViewTransition) {
		callback();
		return;
	}

	document.startViewTransition(() => {
		flushSync(() => {
			callback();
		});
	});
};
