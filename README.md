# Sanity - SvelteKit | image url generator

Image url generator for use with sanity and sveltekit that not requiers sanity client with api calls pr. image.
as an alternative to sanitys urlbuilder. Does not support all features.

## Install
```bash
$ npm i von-sanity-sveltekit-img
```

## Use
### Groq queries
Requiers every image to fetch image base-url in initial fetch. Add this imageQuery to all groq image queries where you want to use this builder.
```javascript
const imageQ = /* groq */`
  image{
    ...,
    'url': asset->url,
    'dim': asset->metadata.dimensions
  }`;
```
### JS function
```javascript
import {sanityImageUrl} from 'von-sanity-sveltekit-img'

let spec = {
  image: 'sanityImage', // Sanity image object with url and dim
  width: 600, // int overrides aspect if height set
  height: 400, // int overrides aspect if width set
  aspect: 16/9, // math | int
  bg: 'fff', // string any color
  fit: 'crop', // crop | clip | fill
  blur: 10, // 1-2000
}

const imageUrl = sanityImageUrl(spec)
```

### SvelteKit Component
```svelte
<script>

import SanityImage from 'von-sanity-sveltekit-img';

// Can contain multiple sizes for use with src set
let sizeExample = [
	{
		width: 600, // int overrides aspect if height set
		height: 400, // int overrides aspect if width set
		aspect: 16/9, // math | int
		bg: 'fff', // string any color
		fit: 'crop', // crop | clip | fill
		blur: 10, // 1-2000
		screen: 'max-width: 512px', // valid media query
	},
	{
		...,
	}
]
</script>

<SanityImage sanityImage={sanityImageObj} sizes={sizeExample} />
```