export default function (content, Shortcodes) {
  const trimmed = content.trim()
  const splitContent = trimmed.split('\n')
  const voidTags = ['p', 'div', 'header', 'footer', 'ul', 'li', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'code', 'pre', 'img', 'script', 'link', 'figure', 'figcaption', 'article', 'section']
  const shortcodes = Object.keys(Shortcodes)
  let isCodeTag = false

  const parsedContent = splitContent.reduce((content, line) => {
    // check if line is a shortcode

    if (!isCodeTag) {
      if (line[0] === '[') {
        const shortcode = line.match(/([[])\w+/g).toString().substr(1)
        if (shortcodes.indexOf(shortcode) >= 0) {
          line = Shortcodes[shortcode](line)
        }
      } else {
        // wrap lines without voidTags in paragraph tags
        let tag = line.trim().match(/^<\w+/g)
        tag = tag ? tag[0].trim().slice(1) : ''

        if (tag === 'code') {
          isCodeTag = true
        } else if (voidTags.indexOf(tag) === -1 && line.length > 1) {
          line = '<p>' + line + '</p>'
        }
      }
    }

    content.push(line)
    return content
  }, [])
  return parsedContent.join('')
}
