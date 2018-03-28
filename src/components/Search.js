
import React, { Component } from 'react'

const Search = (props) => {

  const handleSearchChange = (e) =>{
    props.handleChange(e.target.value)
  }

    return (
      <div className="ui huge fluid icon input">
        <input
          onChange={handleSearchChange}
          type="text"
          placeholder={"Search your Recent Transactions"}
        />
        <i className="circular search link icon"></i>
      </div>
    )

 }

 export default Search
