import React from 'react'

const Node = React.createClass({

  getTransform() {
    let { x, y } = this.props
    return `translate(${ x || 0 }, ${ y || 0 })`
  },

  humanizeAction(text) {
    return text.replace(/\_\d+$/, '')
               .replace(/([A-Z])/g, ' $1')
               .toLowerCase()
  },

  render() {
    let { item, active } = this.props
    let fill   = active ? '#E39' : '#7BFDE9'
    let radius = active ? 5 : 3

    return (
      <g className="debugger-node" transform={ this.getTransform() } onClick={ this.onClick }>
        <circle className="debugger-node-marker" r={ radius } fill={ fill } stroke="#001" strokeOpacity="0.9" />

        <text className="debugger-node-label" dy="-14" fontSize="11" textAnchor="middle" fill="white">
          { this.humanizeAction(item.value.type) }
        </text>
      </g>
    )
  },

  onClick(event) {
    event.preventDefault()
    this.props.onClick(this.props.item)
  }

})

export default Node
