import React from 'react'
import Tree  from './tree'
import List  from './list'
import style from './style'

export default function Debugger ({ history, onCheckout }) {

  return (
    <div className={ style.container }>
      <Tree history={ history } onNodeClick={ onCheckout } />
      <List history={ history } />
    </div>
  )
}
