import DOM      from 'react-dom'
import React    from 'react'
import Debugger from './components/debugger'

export default function (repo, options) {
  var container = document.createElement('div')

  container.className = "debugger-wrapper"

  document.body.appendChild(container)

  function checkout (action) {
    repo.checkout(action)
  }

  function render () {
    DOM.render(<Debugger history={repo.history} onCheckout={checkout} />, container)
  }

  render()

  repo.on('change', render)
}
