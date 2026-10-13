<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { VariantProps } from "#lib";

    interface Props extends VariantProps<'div'> {
        children?: Snippet;
        props?: never;
    }
    let {
        color = 'surface',
        variant = 'solid',
        customColor = '',
        class: className = '',
        children,
        ...props
    }: Props = $props();
</script>

<div
        data-color={color}
        data-variant={variant}
        class="card {className}"
        {...props}
        style:--color-custom={customColor || undefined}
>
    {@render children?.()}
</div>

<style>
    .card {
        border-radius: var(--space-2);
        padding: var(--space-2);
        background: var(--_card_bg, var(--_ui-bg));
        border: 1px solid var(--_card_border, var(--_ui-border));
        box-shadow: 4px 4px 8px rgb(0 0 0 / 25%);
    }

    .card[data-color='transparent'] {
        --_card_bg: transparent;
        --_card_border: transparent;
    }

    .card[data-variant='outline'] {
        --_card_bg: transparent;
        border-width: 2px;
    }

    .card[data-variant='glass'] {
        backdrop-filter: blur(20px);
        --_card_bg: color-mix(in srgb, var(--_ui-bg) 40%, transparent);
    }

    @media (hover: hover) {
        .card:hover {
            border-color: var(--_ui-hover-border, var(--_ui-color, var(--_ui-border)));
            box-shadow: inset 4px 4px 8px rgb(0 0 0 / 25%);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        .card {
            transition:
                    border-color 0.2s ease,
                    background-color 0.2s ease,
                    box-shadow 0.2s ease;
        }
    }
</style>
