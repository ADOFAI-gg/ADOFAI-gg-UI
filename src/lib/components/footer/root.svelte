<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import LinkItem from './link-item.svelte';
	import LinkSection from './link-section.svelte';

	type Props = {
		version?: string;
	};

	const { version }: Props = $props();
</script>

<footer class="bg-gg-darkblue/20 p-6">
	<div class="gg-container mx-auto">
		<h2 class="font-bold text-[1.375rem]">ADOFAI.gg</h2>

		<div class="mt-2 gap-1 md:grid-cols-2 grid">
			<LinkSection>
				<LinkItem href="mailto:support@adofai.gg">
					<Localized id="lib-footer-contact-email" />
				</LinkItem>
				<LinkItem href="https://adofai.gg/discord">
					<Localized id="lib-footer-contact-discord" />
				</LinkItem>
			</LinkSection>
			<LinkSection>
				<LinkItem href="https://adofai.gg/docs/legal-notice">
					<Localized id="lib-footer-legal-notice" />
				</LinkItem>
				<LinkItem href="https://adofai.gg/docs/general-terms">
					<Localized id="lib-footer-legal-terms" />
				</LinkItem>
				<LinkItem href="https://adofai.gg/docs/privacy" class="font-medium opacity-100">
					<Localized id="lib-footer-legal-privacy" />
				</LinkItem>
			</LinkSection>
		</div>

		<div class="mt-4 text-sm text-white/80">
			<span>© ADOFAI.gg</span>
			<span class="ml-2">
				<Localized id="lib-footer-copyright" />
			</span>
			{#if version}
				<span class="ml-2">
					{version}
				</span>
			{/if}
		</div>
	</div>
</footer>
