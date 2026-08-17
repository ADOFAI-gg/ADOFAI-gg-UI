import type { Snippet } from 'svelte';

/**
 * The context shared by the compatibility Modal component.
 *
 * The old implementation exposed its dialog state here. Keep a
 * component-local context so consumers can still use the context symbol
 * while the implementation is backed by bits-ui.
 */
export const ModalContext = Symbol('modal context');

export type ModalClose = () => void;

export type ModalContextData = {
	close: ModalClose;
};

export type ModalChildren = Snippet<[{ close: ModalClose }]>;
