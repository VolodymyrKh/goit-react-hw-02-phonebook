import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ items, onRemoveContact }) => (
  <ul>
    {items.map(item => (
      <ContactListItem
        key={item.id}
        {...item}
        onRemoveContact={() => onRemoveContact(item.id)}
      />
    ))}
  </ul>
);

export default ContactList;
