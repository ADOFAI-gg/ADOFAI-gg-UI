<script lang="ts">
	import { FooterLink, FooterSection } from '$lib/index.js'
	import Translation from '$lib/utils/Translation.svelte'
	import Container from '../Container.svelte'
</script>

<footer class="footer">
	<Container>
		<div class="footer-content">
			<h2 class="footer-title">
				<Translation key="ui-footer:title" />
			</h2>
			<section class="footer-links">
				<FooterSection title="ui-footer:contact">
					<FooterLink href="mailto:support@adofai.gg" target="_blank" rel="noreferrer">
						<Translation key="ui-footer:contact-email" />
					</FooterLink>
					<FooterLink href="https://adofai.gg/discord" target="_blank" rel="noreferrer">
						<Translation key="ui-footer:contact-discord" />
					</FooterLink>
				</FooterSection>
				<FooterSection title="ui-footer:legal">
					<FooterLink href="https://adofai.gg/docs/legal-notice" target="_blank" rel="noreferrer">
						<Translation key="ui-footer:legal-notice" />
					</FooterLink>
					<FooterLink href="https://adofai.gg/docs/terms" target="_blank" rel="noreferrer">
						<Translation key="ui-footer:legal-terms" />
					</FooterLink>
					<FooterLink
						href="https://adofai.gg/docs/privacy"
						target="_blank"
						rel="noreferrer"
						highlight
					>
						<Translation key="ui-footer:legal-privacy" />
					</FooterLink>
				</FooterSection>
			</section>
			<p class="footer-copyright">
				&copy; 2025 ADOFAI.gg. <Translation key="ui-footer:copyright" />
			</p>
		</div>
	</Container>
</footer>

<style lang="scss">
	@use '../../stylesheets/system/breakpoints' as *;

	.footer {
		background-color: rgba(0, 0, 0, 0.2);
	}

	.footer-content {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 24px 0;
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
		display: grid;
		gap: 16px;

		@include breakpoint('sm') {
			gap: 4px;
		}

		@include breakpoint('lg') {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
