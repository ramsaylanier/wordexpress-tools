import {GetShortCode} from './index'

const RenderGallery = line => {
  const shortcode = GetShortCode(line)
  const {params} = shortcode

  // if no size it set, WordPress defaults to thumbnail size
  const size = params.size || 'thumbnail'
  
  const ids = params.ids.split(',').map(id => {
    return `<img src="" id="image-${id}" data-size="${size}"/>`
  })

  return (
    `<div class="js-gallery post-gallery" data-ids="${params.ids}">
      ${ids.join(' ')}
    </div>`
  )
}

export default RenderGallery

