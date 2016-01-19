import Console from './components/console'
import DOM     from 'react-dom'
import React   from 'react'
import Style   from './style.css'

export default function Debugger (app, { depth=Infinity }={}, next) {
  var container = document.createElement('div')
  var style  = document.createElement('style')

  container.className = "debugger-wrapper"

  style.textContent = Style

  document.head.appendChild(style)
  document.body.appendChild(container)

  app.shouldHistoryKeep = function() {
    return app.history.size() <= depth
  }

  function render () {
    DOM.render(<Console app={ app } />, container)
  }

  render()

  app.listen(render)

  next()
}
