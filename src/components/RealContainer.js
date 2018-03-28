import React from 'react'
// import TransactionsList from './TransactionsList'
// import Search from './Search'
import {transactions} from '../transactionsData'
// import {transactions} from '../transactionsData'
import TL from './TL'

class RealContainer extends React.Component {

  // get a default state working with the data imported from TransactionsData
  // use this to get the functionality working
  // then replace the default transactions with a call to the API

  state = {
    transactions: transactions,
    transactionsFilter: '',
    input: '',
    newerinput: ''
  }

  // componentDidMount = () => {
  //   fetch('http://localhost:3001/api/v1/resources.json')
  //   .then(res => res.json())
  //   .then(json => {
  //     this.setState({
  //       transactions: json
  //     })
  //   })
  // }

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






  render() {
    console.log(this.state.transactions.transactions);
    return (
      <div>
        <div className="ui huge fluid icon input">
          <input type='text' placeholder='search' name='transaction filter' value={this.state.input} onChange={this.updateWords} placeholder='filter by descr' />
          <input type='text' placeholder='search' name='transaction filter' value={this.state.newerinput} onChange={this.updateWordsDif} placeholder='filter by category' />

          <i className="circular search link icon"></i>
        </div>
          <TL transactions={this.state.transactions} input={this.state.input} />



      </div>
    )
  }
}

export default RealContainer
