<script>
	import {sanityImageUrl} from '../index.js'

	const {sanityImage, sizes, ...rest} = $props()

</script>
{#if sizes.length > 1}
	<picture>
		{#each sizes as size}
			<source media="({size.screen})" srcset="{sanityImageUrl({image: sanityImage, ...size})}">
		{/each}
		<img src="{sanityImageUrl({image: sanityImage, ...sizes[0]})}" alt="{sanityImage.alt}" loading="lazy" {...rest}>
	</picture>
{:else}
	<img src="{sanityImageUrl({image: sanityImage, ...sizes[0]})}" alt="{sanityImage.alt}" loading="lazy" {...rest}>
{/if}
<style>
	img{
		width: 100%;
		max-width: 100%;
	}
</style>
