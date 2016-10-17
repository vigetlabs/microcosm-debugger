import Node  from './node'
import DOM   from 'react-dom'
import React from 'react'
import Tree  from 'paths-js/tree'
import style from './style'

const TreeVisual = React.createClass({

  getInitialState() {
    return { width: this.getWidth() }
  },

  getDefaultProps() {
    return {
      padX    : 40,
      padY    : 40,
      height  : 200,
      width   : 350
    }
  },

  componentWillReceiveProps() {
    this.setState({ width: this.getWidth() })
  },

  getWidth() {
    return Math.max(this.props.history.size * 20,
                    this.props.width,
                    this.state ? this.state.width : 0)
  },

  getTree(history) {
    let { height, padX, padY } = this.props

    return Tree({
      data   : history.root,
      height : height - padY * 2,
      width  : this.state.width - padX * 2
    })
  },

  getCurve(curve, i) {
    return (<path key={ i } d={ curve.connector.path.print() } />)
  },

  scrollIntoView(component) {
    const el = DOM.findDOMNode(component)

    if (el) {
      el.scrollIntoView(true, { behavior: 'smooth', block: 'end' })
    }
  },

  getNode({ point, item }, i) {
    const active = this.props.history.head === item

    return (<Node key={ i }
                  ref={ active ? this.scrollIntoView : null }
                  x={ point[0] || 0 }
                  y={ point[1] || 0 }
                  item={ item }
                  active={ active }
                  onClick={ this.props.onNodeClick } />)
  },

  render() {
    const { history, height } = this.props

    return (
      <div className={ style.tree }>
        <svg ref="chart" width={ this.state.width } height={ height }>
          { history.size > 0 ? this.renderTree() : null }
        </svg>
      </div>
    )
  },

  renderTree() {
    const { history, padX, padY } = this.props
    const tree = this.getTree(history)

    return (
      <g transform={`translate(${padX},${padY})`}>
        <g fill="none" stroke="rgba(125, 225, 255, 0.2)">
          { tree.curves.map(this.getCurve) }
        </g>
        { tree.nodes.map(this.getNode) }
      </g>
    )
  }

})

export default TreeVisual
