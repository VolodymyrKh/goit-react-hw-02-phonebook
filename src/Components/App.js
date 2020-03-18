import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = { contacts: [] };

  addContact = contact => {
    const contactToAdd = {
      ...contact,
      id: uuid(),
    };

    this.setState(state => ({
      contacts: [...state.contacts, contactToAdd],
    }));
  };

  removeContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    // console.log(contacts);
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h3>Contacts</h3>
        {contacts.length > 0 && (
          <ContactList items={contacts} onRemoveContact={this.removeContact} />
        )}
      </>
    );
  }
}
