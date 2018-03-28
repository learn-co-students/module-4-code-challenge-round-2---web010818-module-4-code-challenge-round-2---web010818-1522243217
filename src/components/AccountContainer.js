import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor(props) {
    super(props)
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
    this.state = {
      transactions: [],
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res=>res.json())
      .then(json=>this.setState({
        transactions: json
      }))
  }

  handleChange = (term) => {
    this.setState({
      searchTerm: term
    })
  }

  render() {
    console.log(transactions)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm}/>
      </div>
    )
  }
}

export default AccountContainer
