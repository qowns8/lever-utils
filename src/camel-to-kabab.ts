export default (value: string) =>
  value.replace(
    /[a-z|0-9][A-Z][a-z|0-9]/g,
    match => match[0] + '-' + match.slice(1).toLowerCase(),
  )
