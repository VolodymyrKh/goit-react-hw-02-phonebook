import React from 'react';

const ContactListItem = ({ contactName, tel, onRemoveContact }) => (
  <li>
    {contactName}: {tel}
    <button type="button" onClick={onRemoveContact}>
      Delete
    </button>
  </li>
);

export default ContactListItem;
