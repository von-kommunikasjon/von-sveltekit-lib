# SvelteKit components for Sanity projects
SvelteKit components for Sanity frontends. Mainly Imageurl builder with no api calls. Hopfully it will grow.

## Install
```bash
$ npm i von-sveltekit-lib
```
## Available imports
```js
// Sveltekit components
import {SanityImage} from 'von-sveltekit-lib';

// Functions
import {sanityImageUrl} from 'von-sveltekit-lib';

// constants with groq-queries
import {imageQ} from 'von-sveltekit-lib';
import {btnQ} from 'von-sveltekit-lib';
import {menuQuery} from 'von-sveltekit-lib';

``` 

## Image url builder (Sanity)
Image url generator for use with sanity and sveltekit that not requiers sanity client with api calls pr. image.
as an alternative to sanitys urlbuilder. Does not support all features.
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
import {sanityImageUrl} from 'von-sveltekit-lib'

let spec = {
  image: 'sanityImage', // Sanity image object with url and dim
  width: 600, // int overrides aspect if height set
  height: 400, // int overrides aspect if width set
  aspect: 16/9, // math | int
  bg: 'fff', // string any color
  fit: 'crop', // crop | clip | fill
  blur: 10, // 1-2000
  q: 75 // image quality (compression). 0-100. Default to 75 
}

const imageUrl = sanityImageUrl(spec)
```

### SvelteKit Component
```html
<script>

import {SanityImage} from 'von-sveltekit-lib';

// Can contain multiple sizes for use with src set
let sizeExample = [
	{
		width: 600, // int overrides aspect if height set
		height: 400, // int overrides aspect if width set
		aspect: 16/9, // math | int
		bg: 'fff', // string any color
		fit: 'crop', // crop | clip | fill
		blur: 10, // 1-2000
		q: 75, // image quality (compression). 0-100. Default to 75 
		screen: 'max-width: 512px', // valid media query
	},
	{
		...,
	}
]
</script>

<SanityImage sanityImage={sanityImageObj} sizes={sizeExample} />
```
Rest props will be added to image tag, so you can send custom styling to <img /> like this:
```html
<SanityImage sanityImage={sanityImageObj} sizes={sizeExample} style="max-height: 80vh;" />
```