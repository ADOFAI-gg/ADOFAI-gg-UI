<script lang="ts">
	import { FooterLink, FooterSection } from '$lib/index.js'
	import Translation from '$lib/utils/Translation.svelte'

	export let minimal = false
</script>

<footer class="footer">
	<div class="footer-content">
		<h2 class="footer-title">
			<Translation key="footer:title" />
		</h2>
		{#if !minimal}
			<section class="footer-details">
				<div class="footer-description">
					<Translation key="footer:description" />
				</div>

				<FooterSection title="footer:section-contact">
					<FooterLink href="mailto:support@adofai.gg">
						<Translation key="footer:link-email" />
					</FooterLink>
					<FooterLink href="https://adofai.gg/discord">
						<Translation key="footer:link-discord" />
					</FooterLink>
				</FooterSection>

				<FooterSection title="footer:section-legal">
					<FooterLink href="https://adofai.gg/docs/legal-notice">
						<Translation key="footer:link-legal-notice" />
					</FooterLink>
					<FooterLink href="https://adofai.gg/docs/terms">
						<Translation key="footer:link-terms" />
					</FooterLink>
					<FooterLink href="https://adofai.gg/docs/privacy">
						<Translation key="footer:link-privacy" />
					</FooterLink>
				</FooterSection>
			</section>
		{/if}
		<p class="footer-copyright">
			&copy; <Translation key="footer:copyright" />
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

	.footer-description {
		font-size: 14px;
	}
</style>
