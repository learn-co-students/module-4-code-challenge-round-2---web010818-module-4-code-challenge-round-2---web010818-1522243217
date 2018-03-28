import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {




 state = {
   transactions: [],
   search: ''
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
     search: term
   })
  }

  render() {
    return (
      <div>

       <Search handleChange={this.handleChange}/>
       <TransactionsList transactions={this.state.transactions} searchTerm={this.state.search}/>
      </div>
    )
  }
}

export default AccountContainer
