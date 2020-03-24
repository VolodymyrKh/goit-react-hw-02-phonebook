import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import styles from './ContactList.module.css'




const ContactList = ({ items, onRemoveContact }) => (
  <ul className={styles.contactList}>
    {items.map(item => (
      <ContactListItem
        key={item.id}
        {...item}
        onRemoveContact={() => onRemoveContact(item.id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
