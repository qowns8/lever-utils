export default (filename: string) => {
  const idx = filename.lastIndexOf('.')
  if (idx < 0) {
    return { name: filename, ext: '' }
  }
  return {
    name: filename.slice(0, idx),
    ext: filename.slice(idx + 1),
  }
}
