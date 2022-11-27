import React from 'react'
import './list.css'

const List = ({
  items,
  children: renderLabel,
}) => {
  const listJSX = items.map((item) => renderLabel(item))

  return (
    <ul className='list'>
      { 
        listJSX
      }
    </ul>
  )
}

export default List
