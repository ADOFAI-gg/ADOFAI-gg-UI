<script lang="ts">
	export let href: string
</script>

<a {href} {...$$restProps} class="nav-popup-link">
	<slot />
</a>

<style lang="scss">
	.nav-popup-link {
		height: 36px;
		font-size: 16px;
		display: flex;
		padding: 0 8px;
		align-items: center;

		transition: background ease 0.2s;
		border-radius: 4px;

		&:hover,
		&:focus {
			background-color: rgba(255, 255, 255, 0.2);
		}
	}
</style>
