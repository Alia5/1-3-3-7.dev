<script lang="ts">
import favicon from '$lib/assets/favicon.svg?url';
import '../css/main.pcss';

let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta title="1-3-3-7.dev" />
</svelte:head>

{@render children()}

<style lang="postcss">
:global(body) {
	display: grid;
	grid-template-rows: auto;
	display: grid;
	place-items: center;
	min-height: 100dvh;
	max-width: 100dvw;
}

:global(main) {
	grid-row: 1 / span 1;
	grid-column: 1 / span 1;
}
</style>
