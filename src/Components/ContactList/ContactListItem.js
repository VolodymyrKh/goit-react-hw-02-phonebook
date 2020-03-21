import React from 'react';
import PropTypes from 'prop-types';
// import styles from './'

const ContactListItem = ({ name, number, onRemoveContact }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={onRemoveContact}>
      Delete
    </button>
  </li>
);

ContactListItem.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactListItem;
