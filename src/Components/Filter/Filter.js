import React from 'react';

const Filter = ({ value, onChangeFilter }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChangeFilter}
      placeholder="Enter contact to filter..."
    ></input>
  </label>
);

export default Filter;
