<script lang="ts">
	import { FooterLink, FooterSection } from '$lib/index.js'
	import Translation from '$lib/utils/Translation.svelte'
	import Container from '../Container.svelte'
</script>

<footer class="footer">
	<Container>
		<div class="footer-content">
			<h2 class="footer-title">
				<Translation key="footer:title" />
			</h2>
			<section class="footer-links">
				<FooterSection title="footer:contact">
					<FooterLink href="mailto:support@adofai.gg" target="_blank" rel="noreferrer">
						<Translation key="footer:contact-email" />
					</FooterLink>
					<FooterLink href="https://adofai.gg/discord" target="_blank" rel="noreferrer">
						<Translation key="footer:contact-discord" />
					</FooterLink>
				</FooterSection>
				<FooterSection title="footer:legal">
					<FooterLink href="https://adofai.gg/docs/legal-notice" target="_blank" rel="noreferrer">
						<Translation key="footer:legal-notice" />
					</FooterLink>
					<FooterLink href="https://adofai.gg/docs/terms" target="_blank" rel="noreferrer">
						<Translation key="footer:legal-terms" />
					</FooterLink>
					<FooterLink href="https://adofai.gg/docs/privacy" target="_blank" rel="noreferrer">
						<Translation key="footer:legal-privacy" />
					</FooterLink>
				</FooterSection>
			</section>
			<p class="footer-copyright">
				&copy; <Translation key="footer:copyright" />
			</p>
		</div>
	</Container>
</footer>

<style lang="scss">
	@import '../../stylesheets/system/breakpoints';

	.footer {
		background-color: rgba(0, 0, 0, 0.2);
	}

	.footer-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 24px;
	}

	.footer-title {
		font-size: 21px;
		font-weight: 700;
	}

	.footer-copyright {
		font-size: 14px;
		opacity: 0.6;
	}

	.footer-links {
		display: flex;
		flex-direction: column;
		gap: 16px;

		@include breakpoint('sm') {
			gap: 4px;
		}
	}
</style>
