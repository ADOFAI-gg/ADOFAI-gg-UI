<script lang="ts">
	import { cn } from '$lib/utils/ui.js';
	import Icon from '@iconify/svelte';
	import { Toaster } from 'svelte-sonner';
	import { tv } from 'tailwind-variants';

	const classes = tv({
		base: 'p-4 rounded-lg text-sm text-black flex gap-2 bg-white w-[360px]',
		variants: {
			style: {
				default: '',
				info: 'bg-linear-0 from-gg-blue/10 to-gg-blue/10',
				success: 'bg-linear-0 from-gg-cyan/10 to-gg-cyan/10',
				warning: 'bg-linear-0 from-gg-yellow/10 to-gg-yellow/10',
				error: 'bg-linear-0 from-gg-red/10 to-gg-red/10'
			}
		}
	});
</script>

<Toaster
	toastOptions={{
		classes: {
			default: classes({ style: 'default' }),
			success: classes({ style: 'success' }),
			warning: classes({ style: 'warning' }),
			info: classes({ style: 'info' }),
			error: classes({ style: 'error' })
		},
		unstyled: true
	}}
>
	{#snippet infoIcon()}
		<Icon icon="gg:infofilled" class="size-5 text-gg-blue" />
	{/snippet}
	{#snippet errorIcon()}
		<Icon icon="gg:xfilled" class="size-5 text-gg-red" />
	{/snippet}
	{#snippet warningIcon()}
		<Icon icon="gg:warningfilled" class="size-5 text-gg-yellow" />
	{/snippet}
	{#snippet successIcon()}
		<Icon icon="gg:checkfilled" class="size-5 text-gg-cyan" />
	{/snippet}
</Toaster>
