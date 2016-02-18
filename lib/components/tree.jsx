import Node  from './node'
import React from 'react'
import Tree  from 'paths-js/tree'

const TreeVisual = React.createClass({

  getDefaultProps() {
    return {
      padding : 25,
      height  : 100,
      width   : 275
    }
  },

  getTree(history) {
    let { height, padding, width } = this.props

    return Tree({
      data   : history.root(),
      height : height - padding * 2,
      width  : width - padding * 2
    })
  },

  getCurve(curve, i) {
    return (<path key={ i } d={ curve.connector.path.print() } />)
  },

  getNode({ point, item }, i) {
    return (<Node key={ i }
                  x={ point[0] }
                  y={ point[1] }
                  item={ item }
                  active={ this.props.history.focus === item }
                  onHover={ this.setFocus }
                  onClick={ this.props.onNodeClick } />)
  },

  render() {
    let { history } = this.props

    return (
      <div className="tree-view">
        { history.size() ? this.renderTree() : null }
      </div>
    )
  },

  renderTree() {
    let { history, padding, width, height } = this.props

    let tree = this.getTree(history)

    return (
      <svg width={ width } height={ height }>
        <g transform={`translate(${padding},${padding})` }>
          <g fill="none" stroke="rgba(125, 225, 255, 0.2)">
            { tree.curves.map(this.getCurve) }
          </g>
          { tree.nodes.map(this.getNode) }
        </g>
      </svg>
    )
  }

})

export default TreeVisual
