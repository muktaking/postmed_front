import React from 'react'
import { Badge } from 'react-bootstrap'

export default function ExamCatBadges({ categoryType }) {
  return (
    categoryType &&
    categoryType.map((category) => (
      <Badge
        key={category.name}
        pill
        variant={categoryTypeVariant(category.name)}
        className='mr-1'
      >
        {category.name}
      </Badge>
    ))
  )
}

const categoryTypeVariant = (name) => {
  let variant = 'primary'
  switch (name) {
    case 'Featured':
      variant = 'warning'
      break
    case 'Free':
      variant = 'secondary'
      break

    default:
      break
  }
  return variant
}
