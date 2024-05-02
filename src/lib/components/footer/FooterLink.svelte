<script lang="ts">
	export let href: string
</script>

<div>
	<a {href} {...$$restProps} class="footer-link"><slot /></a>
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
</style>
