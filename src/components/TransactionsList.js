import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {


  const findTransactions = () => {

    let transactionsFilter = props.transactions.filter((transaction)=>{
      return transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase())
      || transaction.category.toLowerCase().includes(props.searchTerm.toLowerCase())
    })

    return transactionsFilter.map((transactionSingle)=>{
      return <Transaction transactionData={transactionSingle} key={transactionSingle.id} />
    })
  }


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

       {findTransactions()}


      </tbody>
    </table>
  )
}

export default TransactionsList
