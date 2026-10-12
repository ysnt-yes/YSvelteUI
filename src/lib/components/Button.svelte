<script lang="ts">
	import type { VariantProps } from '../variant';
	import type { LucideIcon } from '@lucide/svelte';
	import type { Snippet } from 'svelte';

	interface Props extends VariantProps<'button'> {
		icon?: LucideIcon;
		iconSize?: number;
		children?: Snippet;
		active?: boolean;
	}

	let {
		color = 'surface',
		variant = 'solid',
		customColor = '',
		align = 'center',
		fullWidth = false,
		icon: Icon,
		iconSize = 16,
		children,
		class: className = '',
		active = false,
		...restProps
	}: Props = $props();
</script>

<button
	class="btn {className}"
	data-variant={variant}
	data-color={color}
	data-align={align}
	data-fullwidth={fullWidth || undefined}
	aria-pressed={active ? 'true' : 'false'}
	{...restProps}
	style:--color-custom={customColor || ''}
>
	{#if Icon}
		<span class="icon-wrapper">
			<Icon size={iconSize} />
		</span>
	{/if}

	{#if children}
		{@render children()}
	{/if}
</button>

<style>
	.btn {
		display: inline-flex;
		flex-wrap: nowrap;
		align-items: center;
		padding: var(--space-2_5) var(--space-4);
		gap: var(--space-2_5);
		font-family: inherit;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text);
		cursor: pointer;
		background: var(--_btn-bg, transparent);
		border: 1px solid var(--_btn-border, transparent);
		box-shadow: 4px 4px 8px rgb(0 0 0 / 25%);
		border-radius: var(--space-1_5);
	}

	.btn[data-fullwidth] {
		width: 100%;
	}

	.content-wrapper {
		display: flex;
		flex-wrap: wrap;
		overflow: hidden;
		width: 100%;
	}

	.icon-wrapper {
		display: flex;
		flex-shrink: 0;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		color: var(--_icon-color, inherit);
	}

	.btn[data-align='left'] {
		justify-content: flex-start;
		text-align: left;
	}

	.btn[data-align='center'] {
		justify-content: center;
		text-align: center;
	}

	.btn[data-align='right'] {
		justify-content: flex-end;
		text-align: right;
	}

	.btn[data-color='surface'] {
		--_btn-bg: light-dark(var(--neutral-100), var(--neutral-800));
		--_btn-border: light-dark(var(--neutral-200), var(--neutral-700));
		--_icon-color: var(--neutral-500);
	}

	.btn[data-color='transparent'] {
		--_btn-bg: transparent;
		--_btn-border: transparent;
		--_icon-color: var(--neutral-500);
	}

	.btn[data-color='accent'] {
		--_btn-bg: light-dark(var(--color-brand-100), var(--color-brand-800));
		--_btn-border: light-dark(var(--color-brand-200), var(--color-brand-700));
		--_btn-color: var(--brand-500);
	}

	.btn[data-color='success'] {
      --_btn-bg: light-dark(var(--color-success-100), var(--color-success-800));
      --_btn-border: light-dark(var(--color-success-200), var(--color-success-700));
      --_btn-color: var(--success-500);
  }

	.btn[data-color='warning'] {
      --_btn-bg: light-dark(var(--color-warning-100), var(--color-warning-800));
      --_btn-border: light-dark(var(--color-warning-200), var(--color-warning-700));
      --_btn-color: var(--warning-500);
	}

	.btn[data-color='error'] {
      --_btn-bg: light-dark(var(--color-error-100), var(--color-error-800));
      --_btn-border: light-dark(var(--color-error-200), var(--color-error-700));
      --_btn-color: var(--error-500);
	}

	.btn[data-color='custom'] {
		--_btn-bg: var(--color-custom);
		--_btn-border: var(--color-custom);
		--_btn-color: var(--color-custom);
	}

	.btn[aria-pressed='true'] {
		--_btn-bg: var(--_active-bg);
		--_btn-border: var(--_active-border, transparent);
		--_btn-color: var(--_active-color, white);
	}

	.btn[data-color='surface'][aria-pressed='true'] {
		--_active-bg: light-dark(
			rgb(255 255 255 / 40%),
			color-mix(in srgb, var(--neutral-950) 40%, transparent)
		);
		--_active-border: var(--color-brand);
		--_active-color: var(--color-text);
		--_icon-color: var(--color-brand);
	}

	.btn[data-color='transparent'][aria-pressed='true'] {
		--_active-bg: light-dark(var(--neutral-100), var(--neutral-800-tint));
		--_active-border: light-dark(var(--neutral-200-tint), var(--neutral-700-tint));
		--_active-color: var(--color-text);
		--_icon-color: var(--color-brand);
	}

	.btn[data-color='accent'][aria-pressed='true'] {
		--_active-bg: var(--color-brand);
	}

	.btn[data-color='success'][aria-pressed='true'] {
		--_active-bg: var(--color-success);
	}

	.btn[data-color='warning'][aria-pressed='true'] {
		--_active-bg: var(--color-warning);
	}

	.btn[data-color='error'][aria-pressed='true'] {
		--_active-bg: var(--color-error);
	}

	.btn:active {
		--_btn-bg: var(--_click-bg);
	}

	.btn[data-color='surface']:active,
	.btn[data-color='transparent']:active {
		--_click-bg: light-dark(var(--neutral-300-tint), var(--neutral-700-tint));
	}

	.btn[data-variant='outline'] {
		--_btn-bg: transparent;
		border-width: 2px;
	}

	.btn[data-variant='glass'] {
		backdrop-filter: blur(10px);
		background: color-mix(in srgb, var(--_btn-bg) 60%, transparent);
		--_btn-border: transparent;
	}

	@media (hover: hover) {
		.btn:hover {
			--_btn-bg: var(--_hover-bg);
		}

		.btn[data-color='surface']:hover,
		.btn[data-color='transparent']:hover {
			--_hover-bg: light-dark(var(--neutral-200), var(--neutral-700));
			--_icon-color: var(--color-brand);
		}

		.btn[data-color='accent']:hover {
			--_hover-bg: color-mix(in srgb, var(--color-brand) 25%, transparent);
		}

		.btn[data-color='success']:hover {
			--_hover-bg: color-mix(in srgb, var(--color-success) 25%, transparent);
		}

		.btn[data-color='warning']:hover {
			--_hover-bg: color-mix(in srgb, var(--color-warning) 25%, transparent);
		}

		.btn[data-color='error']:hover {
			--_hover-bg: color-mix(in srgb, var(--color-error) 25%, transparent);
		}

		.btn[aria-pressed='true']:hover {
			--_btn-bg: var(--_active-hover-bg);
		}

		.btn:where([data-color='surface'], [data-color='transparent']):where(
				[aria-pressed='true']
			):hover {
			--_active-hover-bg: light-dark(
				color-mix(in srgb, var(--neutral-200-tint) 55%, transparent),
				color-mix(in srgb, var(--neutral-950-tint) 55%, transparent)
			);
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		.btn {
			transition:
				background-color 0.15s ease,
				border-color 0.15s ease,
				color 0.15s ease;
		}

		.btn:active {
			transform: scale(0.98);
		}

		.icon-wrapper {
			transition: color 0.15s ease;
		}
	}
</style>
