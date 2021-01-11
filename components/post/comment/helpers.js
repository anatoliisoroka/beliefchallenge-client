export function transformComment(str) {
  const res = transformURLs(str)
  return res
}

function transformURLs(str) {
  let res = str
  const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g
  const transforms = str.match(regex)
  if(transforms)
  transforms.forEach(t => res = res.replace(t, `<a href="${t}">${t}</a>`))
  
  return res
}