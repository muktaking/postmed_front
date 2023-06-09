export const tagsToObj = (tagLine) => {
  if (typeof tagLine !== 'string' || tagLine === '') return null
  const tags = tagLine.split(',') // spliting comman seperated tags
  const tagObj = {} // an exmpty tagObj
  //iterating the tags
  tags.forEach((tag) => {
    //checking wheter tag has ':'
    if (tag.includes(':')) {
      const items = tag.split(':') // spliting by ':' --> Left used for key and right is the value
      tagObj[items[0]] = items[1]
    } else tagObj[tag.trim()] = tag.trim() // here key value is same
  })
  return tagObj
}
