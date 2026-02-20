export const sanityImageUrl = (spec) => {
  //console.log(spec.image.alt);
  const { image, width, height, aspect, fit, bg, blur, q } = spec;
  const asset = {
    width: image.dim.width,
    height: image.dim.height
  };
  const baseUrl = image.url;
  const params = [];

  if (fit) {
    params.push(`fit=${fit}`);
  } else if (image.hotspot) {
    params.push('fit=crop&crop=focalpoint');
  } else {
    params.push('fit=crop');
  }

  if (image.hotspot) {
    const hotX = Math.round(image.hotspot.x * 1000) / 1000;
    const hotY = Math.round(image.hotspot.y * 1000) / 1000;
    params.push(`fp-x=${hotX}`);
    params.push(`fp-y=${hotY}`);
  }

  if (image.crop) {
    const cropLeft = Math.round(image.crop.left * asset.width);
    const cropTop = Math.round(image.crop.top * asset.height);
    const cropWidth = Math.round((1 - image.crop.left - image.crop.right) * asset.width);
    const cropHeight = Math.round((1 - image.crop.top - image.crop.bottom) * asset.height);
    if (cropLeft != 0 || cropTop != 0 || image.crop.right != 0 || image.crop.bottom != 0) {
      params.push(`rect=${cropLeft},${cropTop},${cropWidth},${cropHeight}`);
    }
  }

  if (bg) {
    params.push(`bg=${bg}`);
  }

  if (blur) {
    params.push(`blur=${blur}`);
  }
  if (q) {
    params.push(`q=${q}`);
  }

  if (width) {
    params.push(`w=${width}`);
  } else if (aspect && height) {
    params.push(`h=${Math.round(height / aspect)}`);
  }

  if (height) {
    params.push(`h=${height}`);
  } else if (aspect && width) {
    params.push(`h=${Math.round(width / aspect)}`);
  }

  if (params.length === 0) {
    return baseUrl;
  }
  return `${baseUrl}?${params.join('&')}`;
};
