import React from 'react'
import Tree  from './tree'

const Console = React.createClass({

  propTypes: {
    app: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      width : 800
    }
  },

  updateSize() {
    this.setState({
      width: this.refs.frame.parentElement.offsetWidth
    })
  },

  componentDidMount() {
    this.updateSize()
    window.addEventListener('resize', this.updateSize)
  },

  checkout(node) {
    this.props.app.history.checkout(node)
    this.props.app.rollforward()
  },

  render() {
    const { app } = this.props

    return (
      <div className="debugger" ref="frame">
        <Tree history={ app.history } onNodeClick={ this.checkout } width={ this.state.width } />
      </div>
    )
  }

})

export default Console
