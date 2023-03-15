const countObjectProperties = (obj) => {
  return typeof obj === 'object' ? Object.keys(obj).length : 0
}
export {
  countObjectProperties
}
