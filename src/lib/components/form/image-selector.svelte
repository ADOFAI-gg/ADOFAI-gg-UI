<script lang="ts" module>
	import type { HTMLAttributes } from 'svelte/elements';

	export type ImageSelectorProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		aspectRatio?: number | string;
		src?: string;
		loading?: boolean;
		disabled?: boolean;
		canRemove?: boolean;
		onEdit?: (file: File) => void;
		onDelete?: () => void;
		/** Alias for consumers that treat selecting a file as a change. */
		onChange?: (file: File) => void;
	};
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { Popover } from 'bits-ui';
	import { createEventDispatcher } from 'svelte';
	import Icon from '@iconify/svelte';

	import { cn } from '$lib/utils/ui.js';
	import LoadingSpinner from '../loading-spinner/component.svelte';
	import ImageSelectorEditIcon from './image-selector-edit-icon.svelte';

	let {
		aspectRatio = 1,
		src = '',
		loading = false,
		disabled = false,
		canRemove = false,
		onEdit,
		onDelete,
		onChange,
		class: className,
		style,
		...restProps
	}: ImageSelectorProps = $props();

	let inputRef = $state<HTMLInputElement | null>(null);
	let open = $state(false);

	const dispatch = createEventDispatcher<{
		edit: File;
		delete: undefined;
	}>();

	const selectFile = () => {
		if (disabled || loading) return;

		open = false;
		inputRef?.click();
	};

	const handleFileChange = (event: Event) => {
		const input = event.currentTarget as HTMLInputElement;
		const file = input.files?.item(0);

		// Reset the input so selecting the same file again still emits an event.
		input.value = '';

		if (!file) return;

		onEdit?.(file);
		onChange?.(file);
		dispatch('edit', file);
	};

	const removeFile = () => {
		open = false;
		onDelete?.();
		dispatch('delete');
	};

	$effect(() => {
		if (disabled || loading) open = false;
	});
</script>

<div
	{...restProps}
	class={cn('rounded-lg bg-white relative w-full', className)}
	style={`${style ?? ''}${style ? '; ' : ''}aspect-ratio: ${aspectRatio};`}
>
	<input
		class="hidden"
		bind:this={inputRef}
		type="file"
		accept="image/*"
		onchange={handleFileChange}
	/>

	{#if src}
		<img {src} alt="" class="inset-0 rounded-lg absolute z-10 size-full object-cover" />
	{/if}

	{#if !disabled}
		<Popover.Root bind:open>
			<Popover.Trigger disabled={loading}>
				{#snippet child({ props })}
					<ImageSelectorEditIcon {...props} disabled={loading} aria-label="Edit image">
						{#if loading}
							<LoadingSpinner size={24} />
						{:else}
							<Icon icon="gg:pencil" class="size-4.5" aria-hidden="true" />
						{/if}
					</ImageSelectorEditIcon>
				{/snippet}
			</Popover.Trigger>

			<Popover.Portal>
				<Popover.Content
					side="bottom"
					align="end"
					sideOffset={8}
					class="rounded-lg bg-gg-dropdown p-2 shadow-gg-popover data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 z-50 w-[180px] outline-none"
				>
					<button
						type="button"
						class="h-8 gap-4 text-white hover:bg-white/20 flex w-full min-w-[180px] cursor-pointer items-center bg-transparent transition-colors"
						onclick={selectFile}
					>
						<Icon icon="gg:pencil" class="size-4" aria-hidden="true" />
						<Localized id="lib-edit" />
					</button>

					{#if canRemove}
						<button
							type="button"
							class="h-8 gap-4 text-gg-red hover:bg-gg-red/20 flex w-full min-w-[180px] cursor-pointer items-center bg-transparent transition-colors"
							onclick={removeFile}
						>
							<Icon icon="gg:trash" class="size-4" aria-hidden="true" />
							<Localized id="lib-delete" />
						</button>
					{/if}
				</Popover.Content>
			</Popover.Portal>
		</Popover.Root>
	{/if}
</div>
