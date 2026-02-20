<script lang="ts">
import Scissors from '~icons/fluent-emoji-high-contrast/scissors';
import Skateboard from '~icons/fluent-emoji-high-contrast/skateboard';
import Snake from '~icons/game-icons/snake';
import Pepper from '~icons/la/pepper-hot';
import Book from '~icons/mdi/book-open-page-variant';
import Camera from '~icons/mdi/camera';
import IndexPage from '~icons/mdi/file-code';
import GitHub from '~icons/mdi/github';
import Link from '~icons/mdi/link-variant';
</script>

<main>
	<a href="https://behind.flatspot.pictures" rel="external"><Book height="1.4em" />Blog</a>
	<a href="https://flatspot.pictures" rel="external"><Camera height="1.4em" />Flatspot.Pictures</a>
	<a href="https://immolate-skateboards.com" rel="external"
		><Skateboard height="1.4em" />Immolate Skateboards</a>
	<a href="https://github.com/Alia5/SISR" rel="external"><Scissors height="1.4em" />SISR</a>
	<a href="https://github.com/Alia5/VIIPER" rel="external"><Snake height="1.4em" />VIIPER</a>
	<a href="https://github.com/Alia5/PiCCANTE" rel="external"><Pepper height="1.4em" />PiCCANTE</a>
	<a href="https://github.com/Alia5" rel="external"><GitHub height="1.4em" />GitHub</a>
	<a href="https://github.com/Alia5/insvex.http" rel="external"><IndexPage height="1.4em" />Insvex.Http</a>
	<a href="https://1-3-3-7.dev/short" rel="external"><Link height="1.4em" />1337 URL</a>
</main>

<style lang="postcss">
main {
	display: grid;
	place-items: center;
	grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
	width: 50dvw;
	gap: 2em;
	max-width: calc((30ch + 2em) * 3);
	place-self: center;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		width: 100%;
		padding: 1em;
	}

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(ellipse at center, rgba(255 255 255 / 0) 0%, rgba(24, 24, 24, 0.5) 100%);
	}
}

a {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5em;
	width: 100%;
}
</style>
