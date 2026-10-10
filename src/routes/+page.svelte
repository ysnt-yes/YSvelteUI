<script lang="ts">
	import Button from '#lib/components/Button.svelte';
	import type { DesignSystemColor, DesignSystemVariant, DesignSystemAlign } from '#lib/variant.ts';
	import '#lib/styles/styles.css';

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

	// 2. Extract cleanly typed keys for your Svelte loops
	// These arrays are strictly typed as DesignSystemColor[] and DesignSystemVariant[]
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

<style>
	:global(:root) {
		overscroll-behavior: none;
		background: linear-gradient(
			135deg,
			#800080,
			#008080,
			#000080,
			#800080,
			#008080,
			#000080,
			#800080,
			#008080,
			#000080,
			#800080,
			#008080,
			#000080,
			#800080,
			#008080,
			#000080,
			#800080
		);
		animation: scrollGradient 6s linear infinite;
		background-size: 200% auto;
	}

	@keyframes scrollGradient {
		0% {
			background-position: 0% center;
		}
		100% {
			background-position: -200% center;
		}
	}
</style>
