<script lang="ts">
	import type { VariantProps } from '#lib';
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
		cursor: pointer;
		border-radius: var(--space-1_5);
		box-shadow: 4px 4px 8px rgb(0 0 0 / 25%);

		background: var(--_btn-bg, var(--_ui-bg, transparent));
		border: 1px solid var(--_btn-border, var(--_ui-border, transparent));
		color: var(--_btn-color, var(--_ui-color, var(--color-text)));
	}

	.btn[data-fullwidth] {
		width: 100%;
	}

	.icon-wrapper {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		color: var(--_icon-color, inherit);
	}

	.btn[data-align='left'] { justify-content: flex-start; text-align: left; }
	.btn[data-align='center'] { justify-content: center; text-align: center; }
	.btn[data-align='right'] { justify-content: flex-end; text-align: right; }

	.btn[aria-pressed='true'] {
		--_btn-bg: var(--_ui-active-bg);
		--_btn-border: var(--_ui-active-border, transparent);
		--_btn-color: var(--_ui-active-color, white);
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
			--_btn-bg: var(--_ui-hover-bg);
		}

		.btn[aria-pressed='true']:hover {
			--_btn-bg: var(--_ui-active-hover-bg);
		}
	}

	.btn:active {
		--_btn-bg: var(--_ui-click-bg);
	}

	@media (prefers-reduced-motion: no-preference) {
		.btn {
			transition:
					background-color 0.15s ease,
					border-color 0.15s ease,
					color 0.15s ease,
					transform 0.1s ease;
		}

		.btn:active {
			transform: scale(0.98);
		}

		.icon-wrapper {
			transition: color 0.15s ease;
		}
	}
</style>
