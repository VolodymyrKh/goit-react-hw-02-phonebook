import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.inputLabel}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChangeFilter}
      placeholder="Enter contact to filter..."
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
