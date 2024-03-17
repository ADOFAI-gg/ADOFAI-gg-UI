<script lang="ts">
	export let minimal = false
</script>

<footer class="footer">
	<div class="footer-content">
		<h2 class="footer-title">ADOFAI.gg</h2>
		{#if !minimal}
			<section class="footer-details">
				<div class="test"></div>
				<div class="test"></div>
				<div class="test"></div>
			</section>
		{/if}
		<p class="footer-copyright">
			© 2022. ADOFAI.gg Development Team. 이 사이트에 대한 디자인(타사 제공 이미지, 폰트 제외)과
			아이콘, 소스 코드(라이브러리 제외)에 대한 모든 권리 보유.
		</p>
	</div>
</footer>

<style lang="scss">
	.footer {
		background-color: rgba(0, 0, 0, 0.2);
		padding: 24px;
		display: flex;
		justify-content: center;
	}

	.footer-content {
		width: 100%;
		max-width: 1100px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.footer-title {
		font-size: 21px;
		font-weight: 700;
	}

	.footer-copyright {
		font-size: 14px;
		opacity: 0.6;
	}

	.footer-details {
		display: grid;
		grid-template-columns: repeat(var(--footer-columns), 1fr);
		gap: 24px;

		--footer-columns: 1;

		@media screen and (min-width: 768px) {
			--footer-columns: 2;
		}

		@media screen and (min-width: 1100px) {
			--footer-columns: 3;
		}
	}

	.test {
		height: 40px;
		background-color: red;
	}
</style>
