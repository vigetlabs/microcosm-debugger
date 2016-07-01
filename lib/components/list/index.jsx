import React from 'react'
import Item  from './list-item'
import style from './style'

export default function List ({ history }) {
  let timeline = history.toArray().reverse()

  let items = timeline.map(function (action, i) {
    return <Item key={ i } action={ action } />
  })

  return (
    <ul className={ style.list }>
      { items }
    </ul>
  )
}
