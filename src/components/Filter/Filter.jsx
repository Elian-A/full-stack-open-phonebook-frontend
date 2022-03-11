import React from "react";

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (evt) => {
    setFilter(evt.target.value);
  };
  return (
    <div>
      <h2>Filter</h2>
      filter: <input onChange={handleFilterChange} value={filter} />
    </div>
  );
};

export default Filter;
