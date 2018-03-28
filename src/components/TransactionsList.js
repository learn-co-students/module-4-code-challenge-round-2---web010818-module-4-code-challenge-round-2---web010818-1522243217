import React from 'react'
import uuid from "uuid"

const TransactionsList = (props) => {

console.log(props);
   let tableRows =
      props.transactionsData.map((transaction) => {
      return(
        <tr key={uuid()}>
          <th>{transaction.posted_at}</th>
          <th>{transaction.description}</th>
          <th>{transaction.category}</th>
          <th>{transaction.amount}</th>
        </tr>
       )
      })



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



          {tableRows}




      </tbody>
    </table>
  )
}

export default TransactionsList
