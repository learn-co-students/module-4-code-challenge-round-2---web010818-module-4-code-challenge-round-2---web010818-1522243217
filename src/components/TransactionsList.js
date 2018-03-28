import React from "react";
import Transaction from "./Transaction";

const TransactionsList = props => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Posted At</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>

        {props.transactions.map(transaction => {
          const posted = transaction.posted_at;
          const description = transaction.description;
          const category = transaction.category;
          const amount = transaction.amount;
          return (
            <Transaction
              posted={posted}
              description={description}
              category={category}
              amount={amount}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionsList;
