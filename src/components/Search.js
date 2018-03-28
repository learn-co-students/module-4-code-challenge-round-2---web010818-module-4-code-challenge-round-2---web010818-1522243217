import React from "react";

const Search = props => {
  console.log(props);
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        onChange={props.handleChange}
        value={props.input}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon" />
    </div>
  );
};

export default Search;
