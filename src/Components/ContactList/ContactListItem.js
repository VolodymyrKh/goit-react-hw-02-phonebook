import React from 'react';

const ContactListItem = ({ name, number, onRemoveContact }) => (
  <li>
    {name}: {number}
    <button type="button" onClick={onRemoveContact}>
      Delete
    </button>
  </li>
);

export default ContactListItem;
