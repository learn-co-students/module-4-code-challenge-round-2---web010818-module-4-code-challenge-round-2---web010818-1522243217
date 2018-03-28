import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {

    transactionData:[]

  }

  fetchdata = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions" )
    .then((res)=>res.json())
    .then((data)=>{
        let transactionData = data

        this.setState({
          transactionData
        })
    })
  }


  componentDidMount(){
    this.fetchdata()
  }


  handleChange = (event) => {
    let input = event.target.value
    let data = [...this.state.transactionData]

    let transactionData = data.filter((transaction)=>{
      let description = transaction.description.toLowerCase()
      let category = transaction.category.toLowerCase()
      return ( description.includes(input) || category.includes(input))
    })

    this.setState({
      transactionData
    },()=>console.log(this.state.transactionData))

  }

  render() {


    return (
      <div>
        <Search handleOnChange={this.handleChange} />
        <TransactionsList  transactionsData={this.state.transactionData}/>
      </div>
    )
  }
}

export default AccountContainer
