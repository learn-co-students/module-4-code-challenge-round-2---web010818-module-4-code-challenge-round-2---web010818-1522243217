import React from 'react'
// import TransactionsCard from './TransactionsCard'
import Transaction from './Transaction'

const TL = (props) => {
  console.log(props);

  // pass filteredTransactions as props to <Transaction />
  let allTransactions = props.transactions
  //
  let filteredTransactions = allTransactions.filter(t => {

      return (t.section).toLowerCase().includes(props.input.toLowerCase()) || (t.bio).toLowerCase().includes(props.input.toLowerCase())

  })
  //
  //




  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
               1
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              2
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              3
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              4
            </h3>
          </th>
        </tr>

        <table>
          <tr>

          <th>


          </th>

          </tr>

        </table>


        {
          filteredTransactions.map(t => {
            return <Transaction key={t.key} transaction={t}/>
          })





        }

      </tbody>
    </table>
  )
}

export default TL
