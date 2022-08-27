// method 1: common way to export a single function
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
// method 2: common way to export multiple functions
export { lowercaseString };