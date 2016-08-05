import React from 'react'
import cx    from 'classnames'
import style from './style'

function humanize (text) {
  return text.replace(/\_\d+$/, '')
}

export default React.createClass({

  getInitialState() {
    return {
      open: false
    }
  },

  getClassNames() {
    let { action } = this.props

    return cx(style.item, {
      [style.inactive]  : action.is('disabled'),
      [style.error]     : action.is('failed'),
      [style.loading]   : action.is('open'),
      [style.complete]  : action.is('done'),
      [style.cancelled] : action.is('cancelled')
    })
  },

  mute() {
    this.props.action.toggle()
  },

  toggle() {
    this.setState({ open: !this.state.open })
  },

  renderParameters() {
    const { action } = this.props

    return (
      <div className={ style.parameters }>
        <pre>{ JSON.stringify(action.payload, null, 2) }</pre>
      </div>
    )
  },

  render() {
    const { action } = this.props

    return (
      <li className={ this.getClassNames() }>
        <div className={ style.menu }>
          <span className={ style.title }>
            { humanize(action.behavior.done) }
          </span>

          <button className={ style.button } type="button" onClick={ this.mute }>
            { action.is('disabled') ? "◇" : "◆" }
          </button>

          <button className={ style.button } type="button" onClick={ this.toggle }>
            { this.state.open ? "▴" : "▾" }
          </button>
        </div>

        { this.state.open ? this.renderParameters() : null }
      </li>
    )
  }
})
