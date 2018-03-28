import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  // constructor() {
  //   super()
  //   this.state={
  //     transactions:[]
  //   }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  // }

  state={
    transactions:[],
    userInput:''
  }

  fetchData=()=>{
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(res=>res.json())
    .then(json=>this.setTransactions(json))
  }

  componentDidMount(){
    this.fetchData()
  }

  setTransactions=(json)=>{
    this.setState({
      transactions:json
    })
  }

  handleChange = (event) => {
    this.setState({
      userInput:event.target.value
    },()=>console.log(this.state.userInput))
  }

  filterTransactions=()=>{
    
  }

  render() {
    return (
      <div>
        <Search setChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
