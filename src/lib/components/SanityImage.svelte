<script>
	import {sanityImageUrl} from '../index.js'

	export let sanityImage
	export let sizes
	//console.log(sizes);
	//const image = sanityImage
	let srcSet = []
	if (sizes.length > 1){
		sizes.forEach(e => {
			const imgUrl = sanityImageUrl({
				image: sanityImage,
				...e
			})
			srcSet.push(imgUrl)
		})
	}
</script>
{#if sizes.length > 1}
	<picture>
		{#each srcSet as src, i}
				<source media="({sizes[i].screen})" srcset="{src}">
		{/each}
		<img src="{sanityImageUrl({image: sanityImage, ...sizes[0]})}" alt="{sanityImage.alt}" loading="lazy">
	</picture>
{:else}
	<img src="{sanityImageUrl({image: sanityImage, ...sizes[0]})}" alt="{sanityImage.alt}" loading="lazy">
{/if}
<style>
	img{
		width: 100%;
		max-width: 100%;
	}
</style>
