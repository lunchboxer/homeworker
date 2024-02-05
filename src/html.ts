export const html = (
  strings: TemplateStringsArray,
  ...inserts: Array<string | string[]>
) => {
  // I'm considering trying only strings.
  // The advantage would be no magic, so less confusion
  // const flattenedInserts = inserts.map(item =>
  //   Array.isArray(item) ? item.join(' ') : item,
  // )
  return strings.reduce((result, str, index) => {
    return result + str + (inserts[index] || '')
  }, '')
}
