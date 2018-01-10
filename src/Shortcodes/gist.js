import {GetShortCode} from './index'

const RenderGist = line => {
  const shortcode = GetShortCode(line)
  const {params} = shortcode
  return (
    '<div class="js-embed post-embed" data-type="gist" data-source="' + params.src + '"></div>'
  )
}

export default RenderGist

