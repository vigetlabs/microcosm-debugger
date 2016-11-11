import React from 'react'
import Item  from './list-item'
import style from './style'

function Empty() {

  return (
    <div className={ style.empty }>
      <h2 className={ style.heading }>Nothing has happened</h2>
      <p>
        Push actions to follow changes to your application over time.
      </p>
    </div>
  )
}

export default function List ({ history }) {
  let items = history.toArray().reduce(function (list, action, i) {
    return list.concat(<Item key={ i } action={ action } />)
  }, []).reverse()

  return items.length ? (<ul className={ style.list }>{ items }</ul>) : <Empty />
}
