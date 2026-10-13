<script lang="ts">
	import '#lib/styles/styles.css';
    import Button from "#lib/components/Button.svelte";

    let { children } = $props();

    let theme = $state("light")
    function toggleTheme() {
        theme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
    }
</script>

<Button onclick={toggleTheme}>Toggle Light/Dark ({theme})</Button>

{@render children()}
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
