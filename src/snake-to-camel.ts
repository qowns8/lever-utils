export default (value: string) =>
  value.replace(/_([a-zA-Z])/g, match => match[1].toUpperCase())
