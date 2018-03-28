import React from 'react'
import Transaction from "./Transaction"

const TransactionsList = (props) => {
  console.log(props.transactions)
  const transaction = props.transactions.map(t =>
  <Transaction
    description={t.description}
    amount={t.amount}
    category={t.category}
    posted={t.posted_at}
    key={t.id}
    />)

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
