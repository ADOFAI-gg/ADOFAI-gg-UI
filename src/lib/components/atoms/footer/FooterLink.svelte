<script lang="ts">
	export let href: string
</script>

<div>
	<a {href} {...$$restProps} class="footer-link"><slot /></a>
</div>

<style lang="ts">
	.footer-link {
		font-size: 14px;
		&::before {
			content: '›';
			padding-right: 4px;
			transition: padding-right ease 0.2s;
		}

		&:hover::before {
			padding-right: 8px;
		}
	}
</style>
