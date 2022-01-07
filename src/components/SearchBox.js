import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa3">
      <input
        className="pa2 b3 b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
        autoFocus
      />
    </div>
  );
};

export default SearchBox;
