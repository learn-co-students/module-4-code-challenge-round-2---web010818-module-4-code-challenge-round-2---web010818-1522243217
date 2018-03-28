import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  state = {
    transactions: [],
    input: ""
  };

  componentDidMount = () => {
    this.setState({
      transactions: transactions
    });
  };

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  filterTransaction = () => {
    let allTransactions = [...this.state.transactions];
    let filterTransactions = allTransactions.filter(
      t =>
        t.description.toLowerCase().includes(this.state.input) ||
        t.category.toLowerCase().includes(this.state.input)
    );
    return filterTransactions;
  };

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} input={this.state.input} />
        <TransactionsList transactions={this.filterTransaction()} />
      </div>
    );
  }
}

export default AccountContainer;
