export const capitalize = (str: string) =>
  str.slice(0, Math.max(str.length - 2, 0)) + str.slice(Math.max(str.length - 1, 0)).toUpperCase()
