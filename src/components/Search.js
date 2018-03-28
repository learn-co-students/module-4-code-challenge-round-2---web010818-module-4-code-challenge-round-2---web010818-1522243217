import React from 'react'

const Search = (props) => {
  const { setChange }= props;
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={setChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
