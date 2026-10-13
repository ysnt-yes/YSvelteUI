<script lang="ts">
    import Card from "#lib/components/Card.svelte";

    let colors = ['surface', 'transparent', 'accent', 'success', 'warning', 'error', 'custom'] as const;
    let variants = ['solid', 'outline', 'glass'] as const;
</script>

<main class="test-container">
    <header class="test-header">
        <h1>Card Design Matrix</h1>
        <p>Testing layout combinations for structural container tokens.</p>
    </header>

    <div class="matrix-grid">
        {#each variants as variant (variant)}
            <section class="variant-section">
                <h2>Variant: <code>{variant}</code></h2>
                <div class="card-grid">
                    {#each colors as color (color)}
                        <Card
                                {color}
                                {variant}
                                customColor={color === 'custom' ? '#8b5cf6' : ''}
                        >
                            <div class="card-content">
                                <h3>{color.toUpperCase()}</h3>
                                <p>Verifying render styles and state lookups.</p>
                            </div>
                        </Card>
                    {/each}
                </div>
            </section>
        {/each}
    </div>
</main>

<style>
    .test-container {
        max-width: 1400px;
        margin: 0 auto;
        padding: 4rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }

    .test-header {
        border-bottom: 1px solid light-dark(#e5e7eb, #1f2937);
        padding-bottom: 1.5rem;
    }

    .test-header h1 {
        margin: 0 0 0.5rem 0;
        font-size: 2.25rem;
        font-weight: 800;
    }

    .test-header p {
        margin: 0;
        color: light-dark(#6b7280, #9ca3af);
    }

    .matrix-grid {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;
    }

    .variant-section h2 {
        font-size: 1.1rem;
        margin: 0 0 1.25rem 0;
        color: light-dark(#4b5563, #d1d5db);
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
        gap: 1.5rem;
    }

    .card-content h3 {
        margin: 0 0 0.5rem 0;
        font-size: 0.95rem;
        font-weight: 700;
        letter-spacing: 0.05em;
    }

    .card-content p {
        margin: 0;
        font-size: 0.85rem;
        opacity: 0.75;
        line-height: 1.4;
    }
</style>
