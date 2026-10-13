<script lang="ts">
    import type {DesignSystemAlign, DesignSystemColor, DesignSystemVariant} from "#lib/variant.ts";
    import Button from "#lib/components/Button.svelte";

    const colorMap: Record<DesignSystemColor, string> = {
        accent: 'Accent',
        surface: 'Surface',
        success: 'Success',
        warning: 'Warning',
        error: 'Error',
        transparent: 'Transparent',
        custom: 'Custom Color'
    };

    const variantMap: Record<DesignSystemVariant, string> = {
        solid: 'Solid',
        outline: 'Outline',
        glass: 'Glass'
    };

    const alignMap: Record<DesignSystemAlign, string> = {
        left: 'Left Align',
        center: 'Center Align',
        right: 'Right Align'
    };

    const PREVIEW_COLORS = Object.keys(colorMap) as DesignSystemColor[];
    const PREVIEW_VARIANTS = Object.keys(variantMap) as DesignSystemVariant[];
    const PREVIEW_ALIGNS = Object.keys(alignMap) as DesignSystemAlign[];
</script>

<div style="padding: 1rem; --color-custom: #800080;">
    <h1>Variants</h1>
    <div style="display: flex; flex-direction: column; gap: 1rem;">
        {#each PREVIEW_VARIANTS as variant (variant)}
            <h2>{variantMap[variant]}</h2>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                {#each PREVIEW_COLORS as color (color)}
                    <h3>{colorMap[color]}</h3>
                    <div style="display: flex; flex-direction: row; gap: 1rem;">
                        {#each PREVIEW_ALIGNS as align (align)}
                            <div style="display: flex; flex-direction: column; gap: 1rem;">
                                <p>{alignMap[align]}</p>
                                <Button {variant} {color} {align}>Button</Button>
                            </div>
                        {/each}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>