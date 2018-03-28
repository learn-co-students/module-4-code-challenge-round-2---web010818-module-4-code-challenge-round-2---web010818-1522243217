import React from 'react'

const Search = (props) => {


  const handleChange=()=>{

  }

  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={(e)=>props.handleOnChange(e)}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
