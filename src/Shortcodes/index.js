import {map} from 'lodash'
import RenderCaptionShortCode from './caption'
import RenderCTA from './cta'
import RenderGist from './gist'
import RenderGallery from './gallery'

export const GetShortCode = line => {
  const shortcodeObj = {
    shortcode: '',
    content: '',
    params: {}
  }

  // get shortcode from line (gets everything in between the first set of square brackets)
  shortcodeObj.shortcode = line.match(/\[([^\]]*)\]/g)[0].toString()

  // get array of shortcode parameters
  const params = shortcodeObj.shortcode.match(/[\w-]+="[^"]*"/g)

  // get content between the opening and closing shortcode tags
  const content = line.match(/\](.*?)\[/g)
  if (content) {
    shortcodeObj.content = content.toString().slice(1, -1)
  }

  // turn params into key/value pairs
  map(params, param => {
    const arr = param.split('=')
    shortcodeObj.params[arr[0]] = arr[1].slice(1, -1)
  })

  return shortcodeObj
}

const Shortcodes = {
  caption: RenderCaptionShortCode,
  cta: RenderCTA,
  gist: RenderGist,
  gallery: RenderGallery
}

export default Shortcodes
