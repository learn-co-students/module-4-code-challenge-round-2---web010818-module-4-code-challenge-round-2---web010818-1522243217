import React, {
  Component
} from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import transactions from '../transactionsData'
const url = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  state = {
    transactions: transactions,
    searchWord: ""
  }

  search = (word) => {
    this.setState({
      searchWord: word
    })
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({
        transactions: json
      }))
  }




  render() {

    const filteredTrans = this.state.transactions.filter(trans => {
      return trans.description.includes(this.state.searchWord) || trans.category.includes(this.state.searchWord)
    })

    return ( <
      div >
      <
      Search search = {
        this.search
      }
      /> <
      TransactionsList transactions = {
        filteredTrans
      }
      /> <
      /div>
    )
  }
}

export default AccountContainer
