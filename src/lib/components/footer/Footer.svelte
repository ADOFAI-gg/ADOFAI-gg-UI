<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import FooterLink from './FooterLink.svelte';
	import FooterSection from './FooterSection.svelte';

	interface Props {
		date?: string;
		/** Beta-compatible spelling retained alongside the master `date` prop. */
		version?: string;
	}

	const { date, version }: Props = $props();
	const updateValue = $derived(date ?? version);
</script>

<footer class="bg-gg-darkblue/20 p-6">
	<div class="gg-container mx-auto">
		<h2 class="font-bold text-[1.375rem]">ADOFAI.gg</h2>

		<div class="mt-2 gap-1 md:grid-cols-2 grid">
			<FooterSection>
				<FooterLink href="mailto:support@adofai.gg" target="_blank" rel="noreferrer">
					<Localized id="lib-footer-contact-email" />
				</FooterLink>
				<FooterLink href="https://adofai.gg/discord" target="_blank" rel="noreferrer">
					<Localized id="lib-footer-contact-discord" />
				</FooterLink>
			</FooterSection>
			<FooterSection>
				<FooterLink href="https://adofai.gg/docs/legal-notice" target="_blank" rel="noreferrer">
					<Localized id="lib-footer-legal-notice" />
				</FooterLink>
				<FooterLink href="https://adofai.gg/docs/general-terms" target="_blank" rel="noreferrer">
					<Localized id="lib-footer-legal-terms" />
				</FooterLink>
				<FooterLink
					href="https://adofai.gg/docs/privacy"
					target="_blank"
					rel="noreferrer"
					highlight
				>
					<Localized id="lib-footer-legal-privacy" />
				</FooterLink>
			</FooterSection>
		</div>

		<div class="mt-4 text-sm text-white/80">
			<span>© ADOFAI.gg</span>
			<span class="ml-2">
				<Localized id="lib-footer-copyright" />
			</span>
			{#if updateValue}
				<span class="ml-2">{updateValue}</span>
			{/if}
		</div>
	</div>
</footer>
