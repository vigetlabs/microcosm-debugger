import './style.css'

import Console from './components/console'
import DOM     from 'react-dom'
import React   from 'react'

export default function Debugger (app, options, next) {
  var container = document.createElement('div')

  container.className = "debugger-wrapper"

  document.body.appendChild(container)

  function render () {
    DOM.render(<Console app={ app } />, container)
  }

  render()

  app.listen(render)

  next()
}
