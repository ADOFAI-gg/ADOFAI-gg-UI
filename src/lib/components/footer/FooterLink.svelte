<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAnchorAttributes } from 'svelte/elements'

	interface Props extends HTMLAnchorAttributes {
		href: string
		children: Snippet
		highlight?: boolean
	}

	const { href, children, highlight, ...rest }: Props = $props()
	// export let href: string
</script>

<div>
	<a {href} {...rest} class="footer-link" class:highlight>
		{@render children()}
	</a>
</div>

<style lang="scss">
	.footer-link {
		font-size: 14px;
		opacity: 0.8;

		transition: opacity ease 0.2s;

		&:hover {
			opacity: 1;
		}
	}

	.highlight {
		font-weight: 500;
		opacity: 1;
	}
</style>
