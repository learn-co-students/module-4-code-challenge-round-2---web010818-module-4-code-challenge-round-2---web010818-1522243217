import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  state = {
    transactions: [],
    input: ""
  }


  componentDidMount = () => (
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp => resp.json())
    .then(transactions => this.handleResponse(transactions))
  )


  handleResponse = (transactions) => {
    this.setState({
      transactions: transactions
    }, () => {console.log(this.state.transactions)})
  }


  handleChange = (event) => {
    // your code here
    console.log(event.target.value)
    this.setState({
      input: event.target.value
    })
  }


  filterTransactions = () => {
    let transactionsArray = [...this.state.transactions]
    let filteredTransactions = transactionsArray.filter( t => (t.description).toLowerCase().includes(this.state.input) || (t.category).toLowerCase().includes(this.state.input))
    return filteredTransactions
  }


  render() {
    let filterTrans = this.filterTransactions()
    return (
      <div>
        <Search handleChange={this.handleChange} input={this.state.input}/>
        <TransactionsList transactions={filterTrans}/>
      </div>
    )
  }
}

export default AccountContainer
