const RenderGistEmbed = (shortcode) => {
  const source = shortcode.dataset.source
  const gistFrame = document.createElement('iframe')
  gistFrame.setAttribute('width', '100%')
  gistFrame.id = 'gist-frame'
  gistFrame.classList = 'embed-frame'

  const container = document.createElement('div')
  container.id = 'gist--container'

  const zone = shortcode.appendChild(container)
  zone.innerHTML = ''
  zone.appendChild(gistFrame) 

  const gistFrameHTML =
  `
    <html>
      <body">
        <script type="text/javascript" src="${source}"></script>
      </body>
    </html>
  `

  let gistFrameDoc = gistFrame.document

  if (gistFrame.contentDocument) {
    gistFrameDoc = gistFrame.contentDocument
  } else if (gistFrame.contentWindow) {
    gistFrameDoc = gistFrame.contentWindow.document
  }

  // opens the iframe document and writes the embed script, which then gets executed
  gistFrameDoc.open()
  gistFrameDoc.writeln(gistFrameHTML)
  gistFrameDoc.close()

  return gistFrameHTML
}

export default function (embed) {
  const type = embed.dataset.type
  switch (type) {
  case 'gist':
    RenderGistEmbed(embed)
    break
  }
}