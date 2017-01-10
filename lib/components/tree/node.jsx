import React from 'react'
import cx    from 'classnames'
import style from './style'

const Node = React.createClass({

  render() {
    const { item, active, x = 0, y = 0 } = this.props

    const className = cx(style.node, {
      [style.active]    : active,
      [style.disabled]  : item.disabled,
      [style.error]     : item.is('error'),
      [style.loading]   : item.is('loading'),
      [style.cancelled] : item.is('cancelled')
    })

    return (
      <g className={ className } transform={ `translate(${ x }, ${ y })`} onClick={ this.onClick } onKeyDown={ this.onKeyDown } tabIndex="0" role="button">
        <circle r="10" opacity="0" />
        <circle className={ style.ring } r="3" />
        <circle className={ style.marker } r="3" />

        <text className={ style.label } dy="-18" fontSize="11" textAnchor="middle" fill="white">
          { item.behavior.name }
        </text>
      </g>
    )
  },

  onKeyDown(event) {
    if (event.key === ' ' || event.key === 'Enter') {
      this.props.onClick(this.props.item)
      event.preventDefault()
    }
  },

  onClick() {
    this.props.onClick(this.props.item)
  }

})

export default Node
