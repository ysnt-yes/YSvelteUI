<script lang="ts">
	import type { VariantProps } from '#lib';

	type Props = VariantProps<'input'>

	let {
		color = 'surface',
		variant = 'solid',
		customColor = '',
		fullWidth = false,
		class: className = '',
		...restProps
	}: Props = $props();
</script>

<input
		class="input {className}"
		data-variant={variant}
		data-color={color}
		data-fullwidth={fullWidth || undefined}
		{...restProps}
		style:--color-custom={customColor || ''}
/>

<style>
	.input {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		padding: var(--space-2_5) var(--space-4);
		gap: var(--space-2_5);
		font-family: inherit;
		font-size: 0.875rem;
		font-weight: 500;
		cursor: text;
		border-radius: var(--space-1_5);
		box-shadow: 4px 4px 8px rgb(0 0 0 / 25%);

		background: var(--_input-bg, var(--_ui-bg, transparent));
		border: 1px solid var(--_input-border, var(--_ui-border, transparent));
		color: var(--_input-color, var(--_ui-color, var(--color-text)));
	}

	.input[data-fullwidth] {
		width: 100%;
	}

	.input[data-variant='outline'] {
		--_input-bg: transparent;
		border-width: 2px;
	}

	.input[data-variant='glass'] {
		backdrop-filter: blur(10px);
		background: color-mix(in srgb, var(--_ui-bg) 60%, transparent);
		--_input-border: transparent;
	}

	@media (hover: hover) {
		.input:hover {
			--_input-bg: var(--_ui-hover-bg);
		}
	}

	.input:focus-visible {
		outline: 2px solid var(--_ui-color, var(--color-brand));
		outline-offset: 2px;
	}

	.input:user-invalid {
		--_input-border: var(--color-error);
		--_input-color: var(--color-error);
	}

	.input:user-valid {
		--_input-border: var(--color-success);
	}

	@media (prefers-reduced-motion: no-preference) {
		.input {
			transition:
					background-color 0.15s ease,
					border-color 0.15s ease,
					color 0.15s ease;
		}
	}
</style>
