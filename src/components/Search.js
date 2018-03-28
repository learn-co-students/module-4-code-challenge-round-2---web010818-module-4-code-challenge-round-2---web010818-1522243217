import React from 'react'

const Search = (props) => {
  console.log(props.input);
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        value={props.input}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
