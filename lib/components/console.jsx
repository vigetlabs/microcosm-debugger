import React from 'react'
import Tree  from './tree'

function humanize (text) {
  return text.replace(/\_\d+$/, '')
}

const Console = React.createClass({

  propTypes: {
    app: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      focus: null
    }
  },

  checkout(node) {
    this.props.app.history.checkout(node)
    this.props.app.rollforward()
  },

  renderFocus() {
    const { focus } = this.state

    return (
      <section className="debugger-entry">
        <header className="debugger-entry__header">
          <h2>
            <button onClick={ () => this.setState({ focus: null }) }>←</button>
            { humanize(focus.type) }
          </h2>
        </header>

        <pre><code>{ JSON.stringify(focus.payload, null, 2) || 'Empty'}</code></pre>
      </section>
    )
  },

  renderList() {
    let items = []
    let start = this.props.app.history.anchor

    while (start) {
      let transaction = start.value

      items.unshift(<li key={ items.length } onClick={ () => this.setState({ focus: transaction }) }>{ humanize(transaction.type) }</li>)

      start = start.next
    }

    return (<ul className="debugger-list">{ items }</ul>)
  },

  render() {

    return (
      <div className="debugger" ref="frame">
        <Tree history={ this.props.app.history } onNodeClick={ this.checkout } width="275" />
        { this.state.focus ? this.renderFocus() : this.renderList() }
      </div>
    )
  }

})

export default Console
