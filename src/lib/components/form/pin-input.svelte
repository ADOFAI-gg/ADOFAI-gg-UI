<script lang="ts" module>
	import type { FormEventHandler } from 'svelte/elements';

	export type PinInputProps = {
		length: number;
		digitsOnly?: boolean;
		value?: string[];
		error?: string;
		onfinish?: (value: string) => void;
		disabled?: boolean;
	};

	export type PINInputProps = PinInputProps;
</script>

<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { tick } from 'svelte';
	import FormHint from './hint.svelte';

	let {
		length,
		digitsOnly = true,
		disabled = false,
		error,
		onfinish,
		value = $bindable([])
	}: PinInputProps = $props();

	let inputs = $state<(HTMLInputElement | null)[]>([]);

	const isValidCharacter = (character: string) => !digitsOnly || /^\d$/.test(character);

	const reportEnd = () => {
		let result = '';

		for (let i = 0; i < length; i++) {
			const character = value[i];

			if (!character || !isValidCharacter(character)) return;

			result += character;
		}

		tick().then(() => onfinish?.(result));
	};

	const onKeyDown = (event: KeyboardEvent) => {
		const input = event.currentTarget as HTMLInputElement;
		const index = inputs.indexOf(input);

		if (index < 0) return;

		switch (event.key) {
			case 'ArrowLeft': {
				event.preventDefault();
				inputs[index - 1]?.focus();
				break;
			}
			case 'ArrowRight': {
				event.preventDefault();
				inputs[index + 1]?.focus();
				break;
			}
			case 'Backspace': {
				event.preventDefault();

				if (input.value) {
					input.value = '';
					value[index] = '';
				}

				inputs[index - 1]?.focus();
				break;
			}
		}
	};

	const onInput: FormEventHandler<HTMLInputElement> = (event) => {
		event.preventDefault();

		const input = event.currentTarget;
		const index = inputs.indexOf(input);

		if (index < 0) return;

		if (index === 0 && input.value.length === length) {
			if ([...input.value].some((character) => !isValidCharacter(character))) {
				input.value = value[0] ?? '';
				return;
			}

			value = [...input.value];
			inputs.findLast((item) => item?.isConnected)?.focus();
			reportEnd();
			return;
		}

		const character = input.value.slice(-1);

		if (character && !isValidCharacter(character)) {
			input.value = value[index] ?? '';
			return;
		}

		input.value = value[index] = character;

		if (!character) return;

		if (index + 1 === length) {
			reportEnd();
			return;
		}

		inputs[index + 1]?.focus();
	};
</script>

<div class="gap-2 flex w-full flex-col items-center">
	<div class="gap-2 flex">
		{#each Array.from({ length }, (_, index) => index) as index (index)}
			<input
				class="h-16 w-12 rounded-lg border-white/20 p-0 font-light text-white focus:border-white/60 disabled:border-white/10 border-2 bg-transparent text-center text-[32px] transition-colors outline-none focus:ring-0"
				type="text"
				inputmode={digitsOnly ? 'numeric' : 'text'}
				value={value[index] ?? ''}
				oninput={onInput}
				onkeydown={onKeyDown}
				aria-label={`PIN digit ${index + 1}`}
				{disabled}
				bind:this={inputs[index]}
			/>
		{/each}
	</div>

	{#if error}
		<FormHint noPadding type="error">
			<Localized id={error} />
		</FormHint>
	{/if}
</div>
