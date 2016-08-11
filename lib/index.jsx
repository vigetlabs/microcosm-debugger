import DOM      from 'react-dom'
import React    from 'react'
import Debugger from './components/debugger'

export default function (app, options) {
  var container = document.createElement('div')
  container.className = "debugger-wrapper"

  var parentContainer = document.getElementById('microcosm-debugger') || document.body
  parentContainer.appendChild(container)

  function checkout (action) {
    app.checkout(action)
  }

  function render () {
    DOM.render(<Debugger history={ app.history } onCheckout={ checkout } />, container)
  }

  render()

  app.on('change', render)
}
