import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
    // mappedTransactions
    // console.log(props.transaction);
    let transaction = props.transactions.map( transaction => {
      return <Transaction transaction={transaction} key={transaction.id} />
    })

//     let allTransactions = props.transactions
//
// let filteredTransactions = allTransactions.filter(t => {
//
//     return (t.description).toLowerCase().includes(props.input.toLowerCase()) || (t.category).toLowerCase().includes(props.input.toLowerCase())
//
// })




  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {transaction}


      </tbody>
    </table>
  )
}

export default TransactionsList
