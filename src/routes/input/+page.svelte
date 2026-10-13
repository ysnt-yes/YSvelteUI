<script lang="ts">
    import Input from "#lib/components/Input.svelte";

    let colors = ['surface', 'transparent', 'accent', 'success', 'warning', 'error', 'custom'] as const;
    let variants = ['solid', 'outline', 'glass'] as const;
</script>

<main class="test-container">
    <header class="test-header">
        <h1>Input Field Matrix</h1>
        <p>Validating text input variants, structural layouts, and native constraint states.</p>
    </header>

    <div class="matrix-grid">
        {#each variants as variant (variant)}
            <section class="variant-section">
                <h2>Variant: <code>{variant}</code></h2>
                <div class="input-grid">
                    {#each colors as color (color)}
                        <div class="field-group">
                            <label for="input-{variant}-{color}">{color.toUpperCase()}</label>
                            <Input
                                    id="input-{variant}-{color}"
                                    {color}
                                    {variant}
                                    placeholder="Enter text..."
                                    customColor={color === 'custom' ? 'var(--color-brand)' : ''}
                            />
                        </div>
                    {/each}
                </div>
            </section>
        {/each}

        <section class="variant-section">
            <h2>Native Validation States</h2>
            <div class="input-grid">
                <div class="field-group">
                    <label for="val-required">Required (Type then clear to trigger invalid)</label>
                    <Input
                            id="val-required"
                            color="surface"
                            variant="solid"
                            required
                            placeholder="Mandatory field..."
                    />
                </div>

                <div class="field-group">
                    <label for="val-email">Email Check (Type invalid email structure)</label>
                    <Input
                            id="val-email"
                            color="surface"
                            variant="outline"
                            type="email"
                            placeholder="name@domain.com"
                    />
                </div>

                <div class="field-group">
                    <label for="val-pattern">Length Constraint (Requires exactly 5 digits)</label>
                    <Input
                            id="val-pattern"
                            color="surface"
                            variant="glass"
                            pattern="[0-9]{5}"
                            placeholder="12345"
                    />
                </div>
            </div>
        </section>
    </div>
</main>

<style>
    .test-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: var(--space-12) var(--space-6);
        display: flex;
        flex-direction: column;
        gap: var(--space-8);
    }

    .test-header {
        border-bottom: 1px solid var(--neutral-200);
        padding-bottom: var(--space-4);
    }

    .test-header h1 {
        margin: 0 0 var(--space-2) 0;
        font-size: 2.25rem;
        font-weight: 800;
    }

    .test-header p {
        margin: 0;
    }

    .matrix-grid {
        display: flex;
        flex-direction: column;
        gap: var(--space-10);
    }

    .variant-section h2 {
        font-size: 1.1rem;
        margin: 0 0 var(--space-6) 0;
        border-bottom: 1px dashed var(--neutral-200);
        padding-bottom: var(--space-2);
    }

    .input-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: var(--space-6);
    }

    .field-group {
        display: flex;
        flex-direction: column;
        gap: var(--space-2);
    }

    .field-group label {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
</style>
