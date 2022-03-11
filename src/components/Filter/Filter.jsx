import React from "react";

const Filter = ({ phoneFilter, setPhoneFilter }) => {
  const handleFilterChange = (evt) => {
    setPhoneFilter(evt.target.value);
  };
  return (
    <div>
      <h2>Filter</h2>
      filter: <input onChange={handleFilterChange} value={phoneFilter} />
    </div>
  );
};

export default Filter;
