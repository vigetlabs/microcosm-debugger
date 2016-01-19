import React from 'react'

const Transaction = React.createClass({

  render() {
    let { transaction } = this.props

    return (
      <div className="transaction-view">
        <table>
          <tbody>
            <tr>
              <th>Type</th>
	            <td>{ transaction.type.replace(/_\d+/, '') }</td>
            </tr>
            <tr>
              <th>Payload</th>
              <td>{ JSON.stringify(transaction.payload, null, 2) || 'None' }</td>
            </tr>
          </tbody>
        </table>

        <button className="transaction-view-close" type="button" onClick={ this.props.onExit }>&times;</button>
      </div>
    )
  }

})

export default Transaction
