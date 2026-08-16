<script lang="ts">
	import { Localized } from '@nubolab-ffwd/svelte-fluent';
	import { Button } from '../button/index.js';
	import { getGlobalContext } from '$lib/utils/context.js';
	import type { GlobalContext } from '$lib/utils/context.js';
	import type { NavSignAreaProps } from './props.js';

	type ContextWithCallbacks = GlobalContext & {
		callbacks?: {
			signIn?: () => void;
			signUp?: () => void;
		};
	};

	const context = getGlobalContext() as ContextWithCallbacks | undefined;
	const { onSignIn, onSignUp }: NavSignAreaProps = $props();

	const signIn = onSignIn ?? context?.callbacks?.signIn;
	const signUp = onSignUp ?? context?.callbacks?.signUp;
</script>

<div class="gap-3 flex">
	<Button size="md" variant="ghostLight" onclick={signIn}>
		<Localized id="lib-sign-in" />
	</Button>
	<Button size="md" variant="outlined" onclick={signUp}>
		<Localized id="lib-sign-up" />
	</Button>
</div>
