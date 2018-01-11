import md5 from 'md5'

export default function (email, size) {
  const base = 'https://www.gravatar.com/avatar/'
  const hash = md5(email.trim().toLowerCase())

  let link = base + hash
  size ? link += `?s=${size}` : null

  return link
}