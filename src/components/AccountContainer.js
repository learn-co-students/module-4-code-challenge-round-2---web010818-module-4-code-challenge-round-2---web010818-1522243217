import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: transactions,
    input: ''
  }



    handleChange = (e) => {
      // debugger
      console.log(e.target);
      this.setState({
        transactionsFilter: e.target.value
      })
    }

    updateWords = (e) => {
      console.log(e.target.value);
      this.setState({
        input: e.target.value
      })

    }

    updateWordsDif = (e) => {
      console.log(e.target.value);
      this.setState({
        newerinput: e.target.value
      })

    }

    updateNewInfo = (vare) => {
      this.setState({
        transactionsFilter: vare
      })
    }


  handleChange = (e) => {
  // debugger
  console.log(e.target.value);
  this.setState({
    input: e.target.value
  })
}

  render() {

    return (
      <div>
        <div className="ui huge fluid icon input">
          <input type='text' placeholder='search' name='transaction filter' value={this.state.input} onChange={this.handleChange} placeholder='filter by descr' />

          <i className="circular search link icon"></i>
          </div>

        <TransactionsList transactions={this.state.transactions} input={this.state.input}/>
      </div>
    )
  }
}

export default AccountContainer
