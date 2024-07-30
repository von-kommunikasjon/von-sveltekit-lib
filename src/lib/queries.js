const imageQ = /* groq */`
  image{
    ...,
    'url': asset->url,
    'dim':asset->metadata.dimensions,
  }`;
const btnQ = /* groq */`
  "link": select(
    targettype == "intrel" => intTarget->slug.current,
    targettype == "intslug" => intSlug,
    targettype == "ext" => extTarget,
  )`;

export const menuQuery = /* groq */ `*[_type == "menu"]{
  ...,
  elements[]{
    ...,
    ${btnQ},
    children[]{
      ...,
      ${btnQ},
      children[]{
        ...,
        ${btnQ},
      }
    }
  }
}`