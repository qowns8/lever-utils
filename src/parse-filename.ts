export default (filename: string): { name: string; ext: string } => {
  const idx = filename.lastIndexOf('.')
  if (idx < 0) {
    return { name: filename, ext: '' }
  }
  return {
    name: filename.slice(0, idx),
    ext: filename.slice(idx + 1),
  }
}
