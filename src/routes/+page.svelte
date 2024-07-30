<script>
	import {SanityImage} from '../lib/index.js';

	const listImgSize = [
		{width: 480, height: 300},
	]
	const bigImgSize = [
	 {width: 480, aspect: 1, screen: 'max-width: 512px'},
	 {width: 960, aspect: 1.25, screen: 'max-width: 992px'},
	 {width: 1200, aspect: 16/9, screen: 'min-width: 993px'},
	]
	const image = {
		"crop": {
			"_type": "sanity.imageCrop",
			"right": 0,
			"top": 0.11018382352941178,
			"left": 0,
			"bottom": 0.3036176470588239
		},
		"hotspot": {
			"width": 0.3102307908809472,
			"x": 0.6507880664227412,
			"y": 0.2730014072614692,
			"height": 0.2022480298339422,
			"_type": "sanity.imageHotspot"
		},
		"_type": "image",
		"alt": "Bilde Alt-text",
		"asset": {
			"_ref": "image-06263c5973990634a3e444e56114ec0defc5b3c6-800x1200-jpg",
			"_type": "reference"
		},
		"url": "https://cdn.sanity.io/images/308qk9br/production/06263c5973990634a3e444e56114ec0defc5b3c6-800x1200.jpg",
		"dim": {
			"_type": "sanity.imageDimensions",
			"width": 800,
			"aspectRatio": 0.6666666666666666,
			"height": 1200
		}
	}
</script>


<div>
	<h1>Dette er en test</h1>
	<SanityImage sanityImage={image} sizes={bigImgSize} />
</div>

<!--

	
	<pre>{JSON.stringify(page,null,2)}</pre>
	-->

<style lang='less'>

</style>