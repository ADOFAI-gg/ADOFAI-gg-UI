<script lang="ts">
	import type { TranslationKey } from 'src/main'
	import type { FormEventHandler } from 'svelte/elements'
	import FormHint from './FormHint.svelte'
	import Translation from '$lib/utils/Translation.svelte'
	import { tick } from 'svelte'

	interface Props {
		length: number
		digitsOnly?: boolean
		value?: string[]
		error?: TranslationKey
		onfinish?: (value: string) => void
		disabled?: boolean
	}

	let {
		length,
		disabled,
		onfinish,
		digitsOnly = true,
		error,
		value = $bindable([])
	}: Props = $props()

	let inputs = $state<(HTMLInputElement | null)[]>([])

	const reportEnd = () => {
		let v = ''
		for (let i = 0; i < length; i++) {
			const c = value[i]

			if (!c) return
			if (digitsOnly && isNaN(parseInt(c))) return

			v += c
		}

		tick().then(() => {
			onfinish?.(v)
		})
	}

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'ArrowLeft': {
				const idx = inputs.indexOf(e.target as HTMLInputElement)
				if (idx < 0) break

				e.preventDefault()

				const newEl = inputs[idx - 1]
				if (!newEl?.isConnected) break

				newEl.focus()

				break
			}
			case 'ArrowRight': {
				const idx = inputs.indexOf(e.target as HTMLInputElement)
				if (idx < 0) break

				e.preventDefault()

				const newEl = inputs[idx + 1]
				if (!newEl?.isConnected) break

				newEl.focus()
				break
			}
			case 'Backspace': {
				const el = e.target as HTMLInputElement
				const idx = inputs.indexOf(el)
				if (idx < 0) break

				e.preventDefault()

				if (el.value) el.value = value[idx] = ''

				const newEl = inputs[idx - 1]
				if (!newEl?.isConnected) break

				newEl.focus()

				break
			}
			default:
				break
		}
	}

	const onInput: FormEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()
		const idx = inputs.indexOf(e.target as HTMLInputElement)
		if (idx < 0) return

		const target = e.target as HTMLInputElement

		if (idx === 0 && target.value.length === length) {
			if (digitsOnly && target.value.split('').some((x) => isNaN(parseInt(x)))) {
				target.value = value[0] ?? ''
				return
			}
			value = target.value.split('')
			inputs.findLast((v) => v?.isConnected)?.focus()
			reportEnd()
			return
		}

		let v = target.value.slice(target.value.length - 1)

		if (digitsOnly && isNaN(parseInt(v))) {
			target.value = value[idx] ?? ''
			return
		}

		target.value = value[idx] = v

		if (!v) return

		if (idx + 1 === length) {
			reportEnd()
			return
		}

		const newItem = inputs[idx + 1]
		if (!newItem?.isConnected) return
		newItem.focus()
	}
</script>

<div class="root">
	<div class="input-root">
		{#each Array.from({ length }) as _, i}
			<input
				class="item"
				value={value[i] ?? ''}
				oninput={onInput}
				onkeydown={onKeyDown}
				{disabled}
				bind:this={inputs[i]}
			/>
		{/each}
	</div>

	{#if error}
		<FormHint noPadding type="error">
			<Translation key={error} />
		</FormHint>
	{/if}
</div>

<style lang="scss">
	.input-root {
		display: flex;
		gap: 8px;
	}

	.item {
		width: 48px;
		height: 64px;
		border-radius: 8px;
		background-color: transparent;
		border: 2px solid rgba(255, 255, 255, 0.2);
		text-align: center;
		font-size: 32px;
		font-weight: 300;

		&:disabled {
			border-color: rgba(255, 255, 255, 0.1);
		}
	}

	.root {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}
</style>
