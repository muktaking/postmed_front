import React from 'react'
import Select from 'react-select'

export default function ShowRoutineTableView({ courses, routines }) {
    const selectRef = useRef();
  const options = courses.map((course) => {
    return { value: course.id, label: course.title }
  })
  return (
    <div>
      <Select options={options} />
    </div>
  )
}
