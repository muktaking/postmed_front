import React from 'react'

export default function PatternExtractor() {
  return <div></div>
}

function extract(txt) {
  if (typeof txt !== 'string') return null
  const splitByTable = txt.match(/#T(.*?)#T/g)

  splitByTable.forEach((table) => {
    const th = table.replace('#T', '')
  })
}
