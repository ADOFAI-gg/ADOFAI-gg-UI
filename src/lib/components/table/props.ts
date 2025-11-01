import type { WithElementRef } from 'bits-ui';
import type {
	HTMLAttributes,
	HTMLTableAttributes,
	HTMLTdAttributes,
	HTMLThAttributes
} from 'svelte/elements';

export type RootProps = WithElementRef<HTMLTableAttributes, HTMLTableElement>;
export type HeaderProps = WithElementRef<
	HTMLAttributes<HTMLTableSectionElement>,
	HTMLTableSectionElement
>;
export type BodyProps = WithElementRef<
	HTMLAttributes<HTMLTableSectionElement>,
	HTMLTableSectionElement
>;
export type RowProps = WithElementRef<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
export type HeadProps = WithElementRef<HTMLThAttributes, HTMLTableCellElement>;
export type CellProps = WithElementRef<HTMLTdAttributes, HTMLTableCellElement>;
