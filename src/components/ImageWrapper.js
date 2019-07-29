import React from 'react'

// the result of sharp's image transformation will be passed directly to this component.
// so if you use `fluid` as `sharpMethod`, you'll get
// src, srcSet, base64, aspectRatio, srcSetType, sizes, density, originalImage. 
// Please refer to `gatsby-plugin-sharp` docs.
const ImageWrapper =  ({ src, srcSet }) => <img src={src} srcSet={srcSet} />

export { ImageWrapper }